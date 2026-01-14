import { useState } from "react";
import Card from "../../shared/card/Card";
import Pagination from "../../shared/pagination/Pagination";
import "./Objectives.css"
import ebook from "../../assets/ebook.jfif"


const itemsPerPage = 3;

function Objectives() {
    const [currentPage, setCurrentPage] = useState(1);

    const produtos = [
        { title: "Dieta - Perca 10kg em 3 meses ", price: "R$ 99" },
        { title: "Dieta - Ganho de massa muscular", price: "R$ 159" },
        { title: "Dieta - Dieta Mr.Olimpya", price: "R$ 159" },
        { title: "Treino - Ficha de treino (iniciante)", price: "R$ 399" },
        { title: "Treino - Ficha de treino (intermediario)", price: "R$ 399" },
        { title: "Treino - Ficha de treino (avançado)", price: "R$ 399" }
    ];

    const totalPages = Math.ceil(produtos.length / itemsPerPage);

    const paginatedItems = produtos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="objectives-container">
            <h1 className="objectives-title">E-Books</h1>

            <div className="objectives-grid">

                {paginatedItems.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        value={item.price}
                        description="Aproveite enquanto durar"
                        footerText="Atualizado há 1h"
                        imageUrl={ebook}
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

export default Objectives;