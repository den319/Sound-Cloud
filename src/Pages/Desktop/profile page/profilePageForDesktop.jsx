import NavbarForDesktop from "../navbarForDesktop";
import Header from "../../../components/Desktop/profile page/header";
import NavbarForProfile from "../../../components/Desktop/profile page/navbarForProfile";
import AsideSectionForProfilePage from "../../../components/Desktop/profile page/asideSectionForProfilePage";






export default function ProfilePageForDesktop() {

    
    return (
        <>
            <NavbarForDesktop />

            <div className="mx-[5px] pt-[3rem] w-fit
                min-[1024px]:mx-[40px] min-[1150px]:mx-[100px]
                min-[960px]:w-[auto]">

               <Header />

                {/* main section */}
                <div className="flex justify-between">

                    <NavbarForProfile />

                    <AsideSectionForProfilePage />
                    
                </div>

            </div>

        </>
    )
}