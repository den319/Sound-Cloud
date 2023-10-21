




export default function Distribute({width, height, color}) {
    return (
        <svg width= {width ? width :"20"} height={height ? height :"20"} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
            <path fill= {color ? color : "#999"}  d="M1.62 10h12v2h-12v-2zm6.526-7v6H7.094V3h-1.58L7.62 0l2.105 3H8.146zm-5.99 1.257l2.867 4.096-.862.603-2.868-4.095L0 5.766l.003-3.665 3.446 1.25-1.294.906h.001zm12.05.582l-2.868 4.096-.863-.604 2.868-4.096-1.293-.905 3.445-1.25.004 3.665-1.293-.906z"/>
        </svg>
    )
}