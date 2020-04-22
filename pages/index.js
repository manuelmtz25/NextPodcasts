export default class extends React.Component{
    render(){
        return  <div>
                    <h1>¡Hola MMA!</h1>
                    <p>Bienvenidos al curso de Next.js</p>

                    <img src="/static/logo.png" alt="Logo" />

                    <style jsx>{`
                        h1{
                            color: red;
                        }

                        p{
                            color: green;
                        }

                        img{
                            max-width:50%;
                            display:block;
                            margin: 0 auto;
                        }
                    `}</style>

                    <style jsx global>{`
                        body{
                            background: white;
                        }
                    `}</style>
                </div>
    }
}