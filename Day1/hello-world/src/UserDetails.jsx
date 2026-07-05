// export const UserDetails = ({name, isOnline}) => {
//     return <>
//     <h3>{name}</h3>
//     <p>Status: {isOnline}</p> // it wont appear like this
//     </>
// }

// first way - If statments - But it has some dublications and stuff - completly differant renders or returning null 
// export const UserDetails = ({name, isOnline, hideOffline}) => {
//     if (hideOffline && !isOnline) {
//         return null;
//     }

//     if (isOnline) {
//         return (
//         <>
//             <h3>{name}</h3>
//             <p>Online</p>
//         </>
//         );
//     }
//     return (
//     <>
//         <h3>{name}</h3>
//         <p>Offline</p> 
//     </>
//     );
    
// }


// 2nd way - ternary operator - either or 
// export const UserDetails = ({name, isOnline, hideOffline}) => {
//     if (hideOffline && !isOnline) {
//         return null;
//     }

//     return (
//     <div>
//         <h3>{name}</h3>
//         <span>{isOnline ? "Online" : "Offline"}</span>
//         <p>{isOnline ? "Availabel for chat" : "NOt available"}</p>
//         {isOnline ? (
//             <button>Send Message</button>
//         ) : (
//             <small>Check back later</small> 
//         )}
//     </div>) 
// } 

// AND operator - Better for theae SHOWandHIDE 
// export const UserDetails = ({name, isOnline, hideOffline, isPremium, IsNewUser}) => {
//     if (hideOffline && !isOnline) {
//         return null;
//     }

//     return (
//     <div>
//         <h3>{name}
//             {isPremium && <span>🤑</span>} 
//             {IsNewUser && <span>😶‍🌫️</span>}
//         </h3>
//         <span>{isOnline ? "Online" : "Offline"}</span>
//         <p>{isOnline ? "Availabel for chat" : "NOt available"}</p>
//         {isOnline ? (
//             <button>Send Message</button>
//         ) : (
//             <small>Check back later</small> 
//         )}
//     </div>) 
// } 


// Variables for complex logic - you prepare the complect logic before the return statment to make the jsx cleaner
export const UserDetails = ({name, isOnline, hideOffline, isPremium, IsNewUser, role}) => {
    if (hideOffline && !isOnline) {
        return null;
    }

    let roleBadge = null;
    if (role === "admin") {
        roleBadge = <span>ADMIN</span>
    } else if (role === "moderator") {
        roleBadge = <span>MODERATOR</span>;
    }


    return (
    <div>
        <h3>{name}
            {isPremium && <span>🤑</span>} 
            {IsNewUser && <span>😶‍🌫️</span>}
            {roleBadge}
        </h3>
        <span>{isOnline ? "Online" : "Offline"}</span>
        <p>{isOnline ? "Availabel for chat" : "NOt available"}</p>
        {isOnline ? (
            <button>Send Message</button>
        ) : (
            <small>Check back later</small> 
        )}
    </div>) 
} 