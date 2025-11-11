// app/api/orders/[orderId]/route.js
export const dynamic = "force-dynamic";
import { orders } from "../../../../lib/orders.js";

export async function GET(_request, { params }) {
  const { orderId } = await params;
  const order = orders.find((o) => o.id === Number(orderId));

  if (!order) {
    return Response.json({ error: "Order not found" }, { status: 404 });
  }

  return Response.json(order);
}

export async function PATCH(request, { params }) {
  const { orderId } = await params;
  const data = await request.json();

  const order = orders.find((o) => o.id === Number(orderId));
  if (!order) {
    return Response.json({ error: "Order not found" }, { status: 404 });
  }

  // ✅ Update in place
  Object.assign(order, data);

  return Response.json(order);
}
