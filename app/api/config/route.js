export async function GET() {
  return Response.json({
    whatsappNumber: process.env.WHATSAPP_NUMBER || "923001234567",
  })
}
