import React from 'react'
import Heading from './Heading';
import {Link} from 'gatsby';

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white" mb-4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ex ipsam corrupti amet. Deleniti culpa eveniet quae ut ea placeat. Necessitatibus cupiditate harum dicta adipisci ipsam. Fuga dolorem cum nisi tempora illum impedit sint ea tempore consequatur iste reiciendis fugit in corrupti veritatis saepe excepturi, vero similique. Sint dignissimos est minima, corporis similique laborum cum dolores accusamus, a magnam culpa.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
