import style from "../css/modules/PostsList.module.scss"
import listaPost from "../posts.json"

export default function PizzasList() {
    return (
        <div className="row">
            {listaPost.map((post, i) => {
                return <div className="col-4 text-center">
                    <div class="card my-2">
                        <img className={style.card_img} src={new URL('../assets/imgs/' + post.image, import.meta.url).href} alt="Card image cap"></img>
                        <div class="card-body">
                            <div class="card-title">
                                <h3>{post.title}</h3>
                            </div>
                            <p>{post.content}</p>
                            <span><strong>Category: </strong>{post.category.name}</span><br />
                            <span><strong>Tags:</strong></span>
                            <ul>
                                {post.tags.map((tag, i) => {
                                    return <li>{tag.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            })}
        </div >
    )
}