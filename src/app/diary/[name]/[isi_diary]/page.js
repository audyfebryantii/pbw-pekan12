import "@styles/diarypost.css"


export default function DiaryPost({params}) {
    const {name, isi_diary} = params

    return(
        <>
            <div className="diarypost-container">
                <h1>{decodeURIComponent(name)}</h1>
                <p>{decodeURIComponent(isi_diary)}</p>
            </div>
        </>
    )
}