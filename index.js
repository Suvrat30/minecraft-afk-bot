const { Client } = require('bedrock-protocol')

function createBot() {
  const client = Client.createClient({
    host: 'ProHunterz30.aternos.me', // e.g. play.example.com
    port: 42007,            // Bedrock default port
    username: 'AFKBotBedrock' // Use any name
  })

  client.on('join', () => {
    console.log('✅ Bot connected to Bedrock server.')
  })

  client.on('packet', ({ name, params }) => {
    if (name === 'text') {
      console.log(`[CHAT] ${params.message}`)
    }
  })

  client.on('disconnect', (reason) => {
    console.log('❌ Disconnected:', reason)
    console.log('Reconnecting in 5 sec...')
    setTimeout(createBot, 5000)
  })

  client.on('error', (err) => {
    console.log('Error:', err)
  })
}

createBot()
