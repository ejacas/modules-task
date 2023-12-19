const app = document.getElementById("app")

const loadHeader = () => {
    app.innerHTML =    
    `
    <header style="background: gold; color: white; display: flex; flex-direction: column; text-align: center; margin-top: 25px; padding: 25px;">
            <h1 style="font-size: 50px; margin: 0;">Header</h1>
            <p style="font-size: 25px;">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta earum magnam laboriosam. Veritatis commodi, voluptatem ipsum amet quo tempora! Ducimus quia consequuntur soluta laudantium minima nesciunt ipsum quo consequatur earum!
            </p>
        </header>
    `
}

export default loadHeader