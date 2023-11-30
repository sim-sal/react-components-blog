import style from "../css/modules/PostsList.module.scss"
import listaPost from "../posts.json"

function getImgUrl(name) {
    return new URL('../assets/imgs/' + name, import.meta.url).href;
}

export default function PizzasList() {
    return (
        <div className="row">
            {listaPost.map((post, i) => {
                return <div className="col-4 text-center">
                    <div class="card bg-light my-2">
                        <img className={style.card_img} src={getImgUrl(post.image)} alt="Card image cap"></img>
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