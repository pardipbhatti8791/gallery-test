import Head from 'next/head'


export default function Home() {
    return (
        <>
            <Head>
                <title>Gallery Test</title>
            </Head>

            <main role="main" className="main-cont">
                <div className="container">
                    <div className="row">
                        <div className="col-left">
                            <div className="form">
                                <input type="text" placeholder="Photo Gallery"/>
                                <textarea
                                    placeholder="A selection of the latest photos from our restaurent and some of our favorite dishes"
                                    rows={3} defaultValue={""}/>
                                <div className="upload-file">
                                    <label>Drag photos here</label>
                                    <input type="file"/>
                                </div>
                                <button type="submit" className="btn-delete">Delete ALL photos</button>
                            </div>
                        </div>
                        <div className="col-right">
                            <div className="gallery">
                                <h2>Photo Gallery</h2>
                                <p>A selection of the latest photos from our restaurent and some of our favorite
                                    dishes</p>
                                <ul>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <img src="images/image.jpg"/>
                                        </div>
                                    </li>
                                </ul>
                                <div className="navigation">
                                    <ul>
                                        <li>
                                            <button type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                                                     height={24}>
                                                    <path fill="none" d="M0 0h24v24H0z"/>
                                                    <path
                                                        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                                                     height={24}>
                                                    <path fill="none" d="M0 0h24v24H0z"/>
                                                    <path
                                                        d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                                                     height={24}>
                                                    <path fill="none" d="M0 0h24v24H0z"/>
                                                    <path
                                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

