<template>
    
    <div class="row justify-content-center mt-3 mt-md-5">
        <div class="col-md-12 review_rating">
            <h4>Customer reviews & ratings</h4>
<div class="review_star">
                <div class="reviewrating_boxes">
                    <div class="rating">
                        <h3>4.3</h3>
                        <div class="ratings">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill hash"></i>
                        </div>
                        <div class="total__rating">
                            46 ratings
                        </div>
                    </div>
                    <div class="recommended">
                        <h3>86%</h3>
                        <div class="total__rating">
                            Recommended <span>(13 of 15)</span>

                        </div>
                    </div>
                </div>
                <div class="star__rating">
                    <div class="percentage__box">
                        <div class="stars_rating">5 Stars</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <div class="percentage_rating">48</div>
                    </div>

                    <div class="percentage__box">
                        <div class="stars_rating">4 Stars</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <div class="percentage_rating">34</div>
                    </div>

                    <div class="percentage__box">
                        <div class="stars_rating">3 Stars</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <div class="percentage_rating">27</div>
                    </div>

                    <div class="percentage__box">
                        <div class="stars_rating">2 Stars</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <div class="percentage_rating">10</div>
                    </div>

                    <div class="percentage__box">
                        <div class="stars_rating">1 Stars</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <div class="percentage_rating">03</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row customer__review justify-content-center">

        <div class="col-md-8 col-xl-6">
            <div class="reviewrating_box ">
                <!-- this div show only  customer didnot login -->
                <h4>Write a review</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, animi sequi cupiditate alias doloribus eligendi dolor, commodi quaerat quo, eum ratione. Adipisci eaque tenetur pariatur vel repellat, aut dicta cumque?</p>
                <button class="btn_2" data-bs-toggle="modal"
                data-bs-target="#exampleModal5">Login</button>
                <!--  -->
                <div class="mb-1">
                    <div class="ratings">
<h5>Rating:</h5>
<div class="stars"><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill hash"></i></div>
                  </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title: </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"> Review:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button class="btn_2">Submit</button>
            </div>
      </div>
        </div>
        <div class="row reviewrating_box mb10" data-masonry='{"percentPosition": true }'>

           <div class="col-md-6 pe-2 ps-2">
              <div class="customer_detail">
            <h5>Title here</h5>
            <div class="stars"><i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill hash"></i></div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur voluptas tempore harum quaerat iure. Officiis recusandae porro similique numquam incidunt minus odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel placeat,  consectetur nostrum architecto enim aperiam nesciunt perferendis maxime ipsam consequuntur unde, temporibus cumque tempore!</p>
                <h6>Customer Name</h6>
        </div></div>
        <div class="col-md-6 pe-2 ps-2">
            <div class="customer_detail">
                <h5>Title here</h5>
                <div class="stars"><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill hash"></i></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur voluptas tempore.</p>
                    <h6>Customer Name</h6>
            </div>
           </div>
           <div class="col-md-6 pe-2 ps-2">
            <div class="customer_detail">
                <h5>Title here</h5>
                <div class="stars"><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill hash"></i></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur .</p>
                    <h6>Customer Name</h6>
            </div>
           </div>
           <div class="col-md-6 pe-2 ps-2">
            <div class="customer_detail">
                <h5>Title here</h5>
                <div class="stars"><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill hash"></i></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur voluptas tempore harum quaerat iure. Officiis recusandae porro similique numquam incidunt minus odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt voluptatum repellat atque earum ducimus nam perferendis. Veritatis ducimus obcaecati quisquam harum porro sapiente eos.</p>
                    <h6>Customer Name</h6>
            </div>
           </div>
           <div class="col-md-6 pe-2 ps-2">
            <div class="customer_detail">
                <h5>Title here</h5>
                <div class="stars"><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill hash"></i></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur  odio.</p>
                    <h6>Customer Name</h6>
            </div>
           </div>
           <div class="col-md-6 pe-2 ps-2">
            <div class="customer_detail">
                <h5>Title here</h5>
                <div class="stars"><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill hash"></i></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur voluptas tempore harum quaerat iure. Officiis recusandae porro similique numquam incidunt minus odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit optio quas fugiat consequatur quaerat pariatur voluptate consequuntur velit itaque? Error fuga dolores rerum harum placeat ex excepturi necessitatibus animi?</p>
                    <h6>Customer Name</h6>
            </div>
           </div>
    </div>
</template>