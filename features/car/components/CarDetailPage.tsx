interface CarDetailPageProps {
  id: string;
}

const CarDetailPage = ({ id }: CarDetailPageProps) => {
  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold text-secondary-500">Car Detail</h1>
      <p className="mt-2 text-secondary-400">Car ID: {id}</p>
    </div>
  );
};

export default CarDetailPage;
