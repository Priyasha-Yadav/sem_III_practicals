

import { orders } from "../../../lib/orders.js";

// GET - List all orders
export async function GET() {
  return Response.json(orders);
}

// POST
export async function POST(request) {
  const data = await request.json();
  const newOrder = { id: Date.now(), ...data };
  orders.push(newOrder);
  return Response.json(newOrder, { status: 201 });
}
