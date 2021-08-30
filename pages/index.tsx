import React, {useEffect, useState} from "react";

export async function getServerSideProps({params}) {
    let galleryData;
    try {
        const response = await fetch(
            `http://localhost:3001/api/v1/gallery`
        );
        galleryData = await response.json();
    } catch (e) {
        console.log(e);
    }

    return {
        props: {
            initialData: galleryData,
        },
    };
}

import Head from 'next/head'
import UploadComponent from "../components/UploadComponent/UploadComponent";
import GalleryItem from "../components/GalleryItem/GalleryItem";
import {useActions} from "../hooks/useActions";
import {listGallery} from "../store/gallery/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";

export type InitalGalleryData = {
    next?: {
        page: number,
        limit: number
    },
    previous?: {
        page: number,
        limit: number
    }
    results: Result[]
}

type Result = {
    id: string
    title: string
    description: string
    imageUrl: string
}


export default function Home({initialData}) {
    const {listGallery, createGallery, deleteGallery} = useActions()
    const galleryData = useTypedSelector(state => state.gallery)
    const {gallery, loading, createLoading} = galleryData

    const [gData, setGalleryData] = useState<InitalGalleryData>(gallery !== null ? gallery : initialData)
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")


    useEffect(() => {
        if (gallery !== null) {
            setGalleryData(gallery)
        }
    }, [galleryData, gData])

    const saveData = async (url: string) => {
        const formData = {
            title: title,
            description: description,
            imageUrl: url
        }
        const d = await createGallery(formData)
        setTimeout(() => {
            listGallery(1)
        }, 2000)
    }

    const deleteGal = () => {
        deleteGallery()
        setTimeout(() => {
            listGallery(1)
        }, 2000)
    }

    return (
        <>
            <Head>
                <title>Gallery Test</title>
            </Head>

            <main role="main" className="main-cont">
                <div className="container">
                    <div className="row">
                        <div className="col-left">
                            {createLoading ? "Saving..." : (
                                <div className="form">
                                    <input type="text" placeholder="Photo Gallery"
                                           onChange={e => setTitle(e.target.value)}/>
                                    <textarea
                                        placeholder="A selection of the latest photos from our restaurent and some of our favorite dishes"
                                        rows={3} defaultValue={""} onChange={e => setDescription(e.target.value)}/>
                                    <UploadComponent imageUrlFromServer={saveData} page={1}/>
                                    <button type="button" className="btn-delete" onClick={deleteGal}>Delete ALL
                                        photos
                                    </button>
                                </div>
                            )}

                        </div>
                        <div className="col-right">
                            <div className="gallery">
                                <h2>Photo Gallery</h2>
                                <p>A selection of the latest photos from our restaurent and some of our favorite
                                    dishes</p>
                                <ul>
                                    {loading ? (
                                        <h1>Loading...</h1>) : gData?.results?.length > 0 ? gData?.results.map(result => {
                                        return <GalleryItem key={result.id} item={result}/>
                                    }) : "No Data"}

                                </ul>
                                <div className="navigation">
                                    <ul>
                                        <li>
                                            <button type="submit" onClick={() => listGallery(gData?.previous.page)}
                                                    disabled={!gData?.previous}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                                                     height={24}>
                                                    <path fill="none" d="M0 0h24v24H0z"/>
                                                    <path
                                                        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="submit" onClick={() => listGallery(1)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                                                     height={24}>
                                                    <path fill="none" d="M0 0h24v24H0z"/>
                                                    <path
                                                        d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>

                                            <button type="button" onClick={() => listGallery(gData?.next.page)}
                                                    disabled={!gData?.next}>
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

