import Card from "../../shared/card/Card";
import "./Home.css"
import whey from "../../assets/whey.jfif"
import { useState } from "react";
import Pagination from "../../shared/pagination/Pagination";

const itemsPerPage = 3;


function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPagePopulares, setCurrentPagePopulares] = useState(1);


    const promocoes = [
        { title: "Creatina Integral 100g", price: "R$ 99" },
        { title: "Whey Protein Growth 300g", price: "R$ 159" },
        { title: "Whey Protein Max Titanium 1kg", price: "R$ 399" },
        { title: "Creatina Black Skulls 100g", price: "R$ 99" },
        { title: "Creatina Black Skulls 300g", price: "R$ 129" },
        { title: "Creatina Black Skulls 1kg", price: "R$ 599" },
    ];

    const totalPagesPromocao = Math.ceil(promocoes.length / itemsPerPage);

    const paginatedItemsPromocao = promocoes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    const populares = [
        { title: "Creatina Integral 100g", price: "R$ 99" },
        { title: "Whey Protein Growth 300g", price: "R$ 159" },
        { title: "Whey Protein Max Titanium 1kg", price: "R$ 399" },
        { title: "Creatina Black Skulls 100g", price: "R$ 99" },
        { title: "Creatina Black Skulls 100g", price: "R$ 99" },
        { title: "Creatina Black Skulls 100g", price: "R$ 99" },

    ];

    const totalPagesPopulares = Math.ceil(populares.length / itemsPerPage);

    const paginatedItemsPopulares = populares.slice(
        (currentPagePopulares - 1) * itemsPerPage,
        currentPagePopulares * itemsPerPage
    );


    return (
        <div className="home-container">
            <h1 className="home-title">Ofertas da Semana</h1>

            {paginatedItemsPromocao.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    value={item.price}
                    description="Aproveite enquanto durar"
                    footerText="Atualizado há 1h"
                    imageUrl={whey}
                />
            ))}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPagesPromocao}
                onPageChange={setCurrentPage}
            />

            <h1 className="home-title">Mais Populares</h1>

            {paginatedItemsPopulares.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    value={item.price}
                    description="Aproveite enquanto durar"
                    footerText="Atualizado há 1h"
                    imageUrl={whey}
                />
            ))}

            <Pagination
                currentPage={currentPagePopulares}
                totalPages={totalPagesPopulares}
                onPageChange={setCurrentPagePopulares}
            />

        </div>
    );

}

export default Home;