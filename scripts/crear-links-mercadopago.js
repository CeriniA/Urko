/**
 * Script para crear links de pago de Mercado Pago
 * 
 * REQUISITOS:
 * 1. Instalar SDK: npm install mercadopago
 * 2. Obtener Access Token de Mercado Pago: https://www.mercadopago.com.ar/developers/panel/credentials
 * 3. Crear archivo .env con: VITE_ACCESS_TOKEN=tu_access_token_aqui
 * 
 * USO:
 * node scripts/crear-links-mercadopago.js
 */

import mercadopago from 'mercadopago';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config();

// Configurar Mercado Pago
mercadopago.configure({
  access_token: process.env.VITE_ACCESS_TOKEN
});

// Productos a crear
const productos = [
  {
    id: 'libro-1',
    title: 'Si yo pude, vos podés',
    description: 'Testimonio directo de transformación. Desde la pérdida de firmeza y la eyaculación precoz, hasta la recuperación del vigor masculino.',
    unit_price: 15,
    quantity: 1,
    currency_id: 'USD'
  },
  {
    id: 'libro-2',
    title: 'El Entrenamiento Urko',
    description: 'La guía definitiva de 10 pasos para el vigor masculino. Sistematización completa del método tántrico-taoísta aplicado.',
    unit_price: 20,
    quantity: 1,
    currency_id: 'USD'
  },
  {
    id: 'pack-libros',
    title: 'Pack Completo de Libros',
    description: 'Ambos libros en un solo pack con precio especial.',
    unit_price: 30,
    quantity: 1,
    currency_id: 'USD'
  },
  {
    id: 'programa-fundamental',
    title: 'PROGRAMA FUNDAMENTAL',
    description: 'Acceso completo al método Urko en formato autónomo. Incluye método paso a paso, protocolos prácticos, ejercicios progresivos, acceso de por vida y actualizaciones futuras.',
    unit_price: 247,
    quantity: 1,
    currency_id: 'USD'
  },
  {
    id: 'entrenamiento-trimestral',
    title: 'ENTRENAMIENTO TRIMESTRAL',
    description: 'Tres meses de estructura grupal con encuentros en vivo. Incluye calendario definido, 6 encuentros grupales en vivo, método completo, acceso de por vida y actualizaciones.',
    unit_price: 497,
    quantity: 1,
    currency_id: 'USD'
  }
];

// URLs de retorno (ajustar según tu dominio)
const BASE_URL = 'https://tu-dominio.com'; // CAMBIAR POR TU DOMINIO

async function crearPreferencia(producto) {
  try {
    const preference = {
      items: [
        {
          title: producto.title,
          description: producto.description,
          unit_price: producto.unit_price,
          quantity: producto.quantity,
          currency_id: producto.currency_id
        }
      ],
      back_urls: {
        success: `${BASE_URL}/pago-exitoso`,
        failure: `${BASE_URL}/pago-fallido`,
        pending: `${BASE_URL}/pago-pendiente`
      },
      auto_return: 'approved',
      external_reference: producto.id,
      notification_url: `${BASE_URL}/api/mercadopago/webhook`, // Para recibir notificaciones
      statement_descriptor: 'URKO TANTRICO',
      payment_methods: {
        excluded_payment_types: [],
        installments: 1 // Número de cuotas permitidas
      }
    };

    const response = await mercadopago.preferences.create(preference);
    
    return {
      id: producto.id,
      title: producto.title,
      price: producto.unit_price,
      init_point: response.body.init_point, // Link para web
      sandbox_init_point: response.body.sandbox_init_point, // Link de prueba
      preference_id: response.body.id
    };
  } catch (error) {
    console.error(`Error creando preferencia para ${producto.title}:`, error);
    return null;
  }
}

async function crearTodosLosLinks() {
  console.log('🚀 Iniciando creación de links de Mercado Pago...\n');
  
  if (!process.env.MP_ACCESS_TOKEN) {
    console.error('❌ ERROR: No se encontró MP_ACCESS_TOKEN en .env');
    console.log('Por favor, agrega tu Access Token de Mercado Pago en el archivo .env:');
    console.log('MP_ACCESS_TOKEN=tu_access_token_aqui\n');
    return;
  }

  const resultados = [];

  for (const producto of productos) {
    console.log(`⏳ Creando link para: ${producto.title}...`);
    const resultado = await crearPreferencia(producto);
    
    if (resultado) {
      resultados.push(resultado);
      console.log(`✅ Link creado exitosamente`);
      console.log(`   💰 Precio: USD ${resultado.price}`);
      console.log(`   🔗 Link: ${resultado.init_point}\n`);
    } else {
      console.log(`❌ Error al crear link\n`);
    }
  }

  // Guardar resultados en un archivo JSON
  const outputPath = path.join(__dirname, '..', 'links-mercadopago.json');
  fs.writeFileSync(outputPath, JSON.stringify(resultados, null, 2));
  console.log(`\n📄 Links guardados en: ${outputPath}`);

  // Generar código para copiar y pegar en products.js
  console.log('\n📋 CÓDIGO PARA COPIAR EN products.js:\n');
  console.log('// Reemplazar los mpLink con estos valores:\n');
  
  resultados.forEach(r => {
    console.log(`// ${r.title}`);
    console.log(`mpLink: '${r.init_point}',\n`);
  });

  console.log('\n✨ ¡Proceso completado!');
}

// Ejecutar
crearTodosLosLinks().catch(console.error);
