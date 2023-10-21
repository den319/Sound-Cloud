

import EmptyAlbumImg from "../../../assets/album img for profile.png";
import ShowEmptySection from "../../../components/Desktop/library page/showEmptySection";




export default function AlbumsForLibraryPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <ShowEmptySection 
                image={EmptyAlbumImg} 
                message={"You haven't liked any albums yet"}
                linkMessage={"Browse trending playlists"} 
            />
        </div>
    )
}