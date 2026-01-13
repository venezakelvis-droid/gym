import Card from "../../shared/card/Card";
import "./Home.css"
import whey from "../../assets/whey.jfif"

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Ofertas da Semana</h1>

            <Card
                title="Nova Promoção"
                value="R$ 499"
                description="Aproveite enquanto durar"
                footerText="Atualizado há 1h"
                imageUrl={whey}
            />

            <Card
                title="Suplemento Protein"
                value="R$ 299"
                description="Mais energia para seus treinos"
                footerText="Atualizado há 2h"
                imageUrl={whey}
            />

            <Card
                title="Pré-treino Nitro"
                value="R$ 199"
                description="Potencialize sua performance"
                footerText="Atualizado há 3h"
                imageUrl={whey}
            />

            <h1 className="home-title">Mais Populares</h1>

            <Card
                title="Nova Promoção"
                value="R$ 499"
                description="Aproveite enquanto durar"
                footerText="Atualizado há 1h"
                imageUrl={whey}
            />

            <Card
                title="Suplemento Protein"
                value="R$ 299"
                description="Mais energia para seus treinos"
                footerText="Atualizado há 2h"
                imageUrl={whey}
            />

            <Card
                title="Pré-treino Nitro"
                value="R$ 199"
                description="Potencialize sua performance"
                footerText="Atualizado há 3h"
                imageUrl={whey}
            />
        </div>
    );

}

export default Home;