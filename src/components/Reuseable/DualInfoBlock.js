import React from "react"
import Heading from "./Heading";
import { Link } from "gatsby";

export default function DualInfoBlock({ heading }) {
  return (
    <div>
      <section className="my-4 py-4 bg-theme">
        <div className="container">
          <Heading title={heading} />
          <div className="row">
            <div className="col-8 mx-auto">
              <p className="lead text-white mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur voluptatibus quis reprehenderit temporibus impedit aut
                nam cumque, inventore minus ut nihil. Nulla cumque quod,
                dignissimos voluptatibus architecto necessitatibus. Architecto
                velit dicta officiis enim ab corporis minima error pariatur
                dignissimos! Expedita, in corrupti tenetur eligendi optio earum
                non aliquid. Nisi, facere!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit hic dignissimos eaque? Est nisi deleniti dolorem ab, eos tempore architecto repellendus quam, dolorum temporibus possimus ullam. Quibusdam aspernatur quod cupiditate esse dolorem sequi expedita reiciendis ipsum vel ipsam fugit, eos error at quia blanditiis reprehenderit voluptatum. Dicta impedit expedita consequatur. Blanditiis culpa vitae accusantium sapiente iste fugit reprehenderit, nostrum eaque cum quasi quae ut numquam est animi beatae aperiam in repellat veniam voluptatem enim officiis? Tempora dolorem quod provident ratione! Eos pariatur cum non nulla, asperiores labore, aliquid consequuntur quisquam, ab nesciunt dolorum. Sed animi voluptatum magni voluptatem exercitationem.
              </p>
            </div>
            <div className="col-4">
              <div className="card bg-dark">
                <img src="https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="image goes here" />
                <div className="card-body">
                  <h5 className="card-title text-success">Just Click Photos</h5>
                  <p className="card-text text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut ex doloremque soluta quod atque, ea vel dolorum facilis doloribus aliquam autem culpa sequi voluptate eaque eos necessitatibus, quas placeat!
                  </p>
                  <Link to="/" className="btn btn-warning btn-block">
                    {heading}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
