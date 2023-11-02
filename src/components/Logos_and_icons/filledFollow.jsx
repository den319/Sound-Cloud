

function Filled_follow(props) {
    const {width, height, color, margin}= props;
    return (
        <svg style={{width: width ? width : '16px',
                    height: height ? height : '16px', fill: color ? color : '#999', margin: margin && margin}} 
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            stroke={color ? color : "#999"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
    )
}

export default Filled_follow;