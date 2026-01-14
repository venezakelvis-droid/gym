import { useState } from "react";
import creatina from "../../assets/creatina.jpg";
import Card from "../../shared/card/Card";
import Pagination from "../../shared/pagination/Pagination";
import "./Creatina.css"

const itemsPerPage = 3;

function Creatina() {
  const [currentPage, setCurrentPage] = useState(1);

  const produtos = [
    { title: "Creatina Growth 100g", price: "R$ 99" },
    { title: "Creatina Growth 300g", price: "R$ 159" },
    { title: "Creatina Growth 1kg", price: "R$ 399" },
    { title: "Creatina Black Skulls 100g", price: "R$ 99" },
    { title: "Creatina Black Skulls 300g", price: "R$ 129" },
    { title: "Creatina Max 1kg", price: "R$ 599" },
  ];

  const totalPages = Math.ceil(produtos.length / itemsPerPage);

  const paginatedItems = produtos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="creatina-container">
      <h1 className="creatina-title">Creatinas</h1>

      {paginatedItems.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          value={item.price}
          description="Aproveite enquanto durar"
          footerText="Atualizado há 1h"
          imageUrl={creatina}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Creatina;
