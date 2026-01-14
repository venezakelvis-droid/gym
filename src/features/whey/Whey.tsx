import { useState } from "react";
import whey from "../../assets/whey.jfif";
import Card from "../../shared/card/Card";
import Pagination from "../../shared/pagination/Pagination";
import "./Whey.css"

const itemsPerPage = 3;

function Whey() {
  const [currentPage, setCurrentPage] = useState(1);

  const produtos = [
    { title: "Whey Growth 500g", price: "R$ 99" },
    { title: "Whey Growth 300g", price: "R$ 159" },
    { title: "Whey Growth 1kg", price: "R$ 399" },
    { title: "Whey Black Skulls 300g", price: "R$ 99" },
    { title: "Whey Black Skulls 700g", price: "R$ 129" },
    { title: "Whey Max 1kg", price: "R$ 599" },
  ];

  const totalPages = Math.ceil(produtos.length / itemsPerPage);

  const paginatedItems = produtos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="whey-container">
      <h1 className="whey-title">Whey</h1>

      <div className="whey-grid">
        {paginatedItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            value={item.price}
            description="Aproveite enquanto durar"
            footerText="Atualizado há 1h"
            imageUrl={whey}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Whey;
