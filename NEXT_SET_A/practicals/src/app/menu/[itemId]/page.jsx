
export default async function MenuItemPage({ params }) {
  const { itemId } = await params;

  // Mock data
  const menuItems = [
    { id: 1, name: "Pizza", price: 12, description: "Cheesy and delicious!" },
    { id: 2, name: "Burger", price: 8, description: "Juicy and crispy." },
    { id: 3, name: "Pasta", price: 10, description: "Creamy Alfredo sauce." },
  ];

  const item = menuItems.find((i) => i.id === Number(itemId));

  if (!item) return <p>Item not found.</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  );
}
