import { useState } from "react";
import Card from "../../shared/card/Card";
import Pagination from "../../shared/pagination/Pagination";
import combo from "../../assets/combo.jfif"
import "./Combos.css"

const itemsPerPage = 3;


function Combos() {
    const [currentPage, setCurrentPage] = useState(1);

    const produtos = [
        { title: "Creatina + Whey Growth 100g", price: "R$ 99" },
        { title: "Creatina + Whey Max 300g", price: "R$ 159" },
        { title: "Creatina + Whey Black Skulls 1kg", price: "R$ 399" },
         { title: "Creatina + Whey Black Skulls 1kg", price: "R$ 399" },
    ];

    const totalPages = Math.ceil(produtos.length / itemsPerPage);

    const paginatedItems = produtos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="combos-container">
            <h1 className="combos-title">Combos</h1>

            <div className="combos-grid">
                {paginatedItems.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        value={item.price}
                        description="Aproveite enquanto durar"
                        footerText="Atualizado há 1h"
                        imageUrl={combo}
                    />
                ))}
            </div>

            <div className="combos-pagination">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div >
    );
}

export default Combos;