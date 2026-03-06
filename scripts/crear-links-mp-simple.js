/**
 * Script SIMPLE para crear links de Mercado Pago usando fetch
 * No requiere instalar SDK, solo Node.js 18+
 * 
 * PASOS:
 * 1. Obtener Access Token: https://www.mercadopago.com.ar/developers/panel/credentials
 * 2. Agregar en .env: MP_ACCESS_TOKEN=tu_token_aqui
 * 3. Ejecutar: node scripts/crear-links-mp-simple.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚠️ CONFIGURACIÓN - Pegar tu Access Token aquí
const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || 'PEGAR_TU_ACCESS_TOKEN_AQUI';

// ⚠️ CAMBIAR por tu dominio real
const BASE_URL = 'https://urkotantrico.com';

// Productos a crear
const productos = [
  {
    id: 'libro-1',
    title: 'Si yo pude, vos podés - Libro Digital',
    description: 'Testimonio directo de transformación. Desde la pérdida de firmeza y la eyaculación precoz, hasta la recuperación del vigor masculino. Libro digital en formato PDF.',
    price: 15,
  },
  {
    id: 'libro-2',
    title: 'El Entrenamiento Urko - Libro Digital',
    description: 'La guía definitiva de 10 pasos para el vigor masculino. Sistematización completa del método tántrico-taoísta aplicado. Libro digital en formato PDF.',
    price: 20,
  },
  {
    id: 'pack-libros',
    title: 'Pack Completo de Libros - 2 Libros Digitales',
    description: 'Ambos libros en un solo pack con precio especial. Incluye "Si yo pude, vos podés" y "El Entrenamiento Urko" en formato PDF.',
    price: 30,
  },
  {
    id: 'programa-fundamental',
    title: 'PROGRAMA FUNDAMENTAL - Acceso de por vida',
    description: 'Acceso completo al método Urko en formato autónomo. Incluye método paso a paso, protocolos prácticos, ejercicios progresivos, acceso de por vida y actualizaciones futuras.',
    price: 247,
  },
  {
    id: 'entrenamiento-trimestral',
    title: 'ENTRENAMIENTO TRIMESTRAL - 3 meses con encuentros en vivo',
    description: 'Tres meses de estructura grupal con encuentros en vivo. Incluye calendario definido, 6 encuentros grupales en vivo, método completo, acceso de por vida y actualizaciones.',
    price: 497,
  }
];

async function crearPreferencia(producto) {
  const preference = {
    items: [
      {
        title: producto.title,
        description: producto.description,
        unit_price: producto.price,
        quantity: 1,
        currency_id: 'USD',
        category_id: 'digital_content'
      }
    ],
    back_urls: {
      success: `${BASE_URL}/?pago=exitoso`,
      failure: `${BASE_URL}/?pago=fallido`,
      pending: `${BASE_URL}/?pago=pendiente`
    },
    auto_return: 'approved',
    external_reference: producto.id,
    statement_descriptor: 'URKO TANTRICO',
    payment_methods: {
      installments: 1
    },
    notification_url: `${BASE_URL}/api/mercadopago/webhook`
  };

  try {
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      body: JSON.stringify(preference)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(JSON.stringify(error));
    }

    const data = await response.json();
    
    return {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      link: data.init_point,
      preference_id: data.id
    };
  } catch (error) {
    console.error(`❌ Error con ${producto.title}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Creando links de Mercado Pago...\n');

  if (ACCESS_TOKEN === 'PEGAR_TU_ACCESS_TOKEN_AQUI') {
    console.error('❌ ERROR: Debes configurar tu Access Token');
    console.log('\n📝 Pasos:');
    console.log('1. Ve a: https://www.mercadopago.com.ar/developers/panel/credentials');
    console.log('2. Copia tu Access Token de PRODUCCIÓN');
    console.log('3. Pégalo en este archivo en la línea 14\n');
    return;
  }

  const resultados = [];

  for (const producto of productos) {
    console.log(`⏳ Creando: ${producto.title}...`);
    const resultado = await crearPreferencia(producto);
    
    if (resultado) {
      resultados.push(resultado);
      console.log(`✅ Creado - USD ${resultado.price}`);
      console.log(`   🔗 ${resultado.link}\n`);
    }
    
    // Esperar 500ms entre requests para no saturar la API
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Guardar en JSON
  const jsonPath = path.join(__dirname, '..', 'links-mercadopago.json');
  fs.writeFileSync(jsonPath, JSON.stringify(resultados, null, 2));
  console.log(`\n💾 Links guardados en: links-mercadopago.json\n`);

  // Generar código para products.js
  console.log('=' .repeat(80));
  console.log('📋 COPIAR Y PEGAR EN src/data/products.js:');
  console.log('=' .repeat(80));
  console.log('\n// LIBROS\n');
  
  resultados.forEach(r => {
    if (r.id.includes('libro')) {
      console.log(`// ${r.title}`);
      console.log(`mpLink: '${r.link}',\n`);
    }
  });

  console.log('\n// PROGRAMAS\n');
  
  resultados.forEach(r => {
    if (r.id.includes('programa') || r.id.includes('entrenamiento')) {
      console.log(`// ${r.title}`);
      console.log(`mpLink: '${r.link}',\n`);
    }
  });

  console.log('=' .repeat(80));
  console.log('\n✨ ¡Completado! Ahora copia los links en products.js\n');
}

main().catch(console.error);
