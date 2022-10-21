import React, { useState } from "react";

function BioData() {
    const [state, setState] = useState({
        name: "",
        email: "",
        profession: "",
    });
    const [flag, setFlag] = useState(true);
    const show = (a) => {
        a.preventDefault();
        
        setFlag(current => !current);
    };

    const detail = (b) => {
        setState({ ...state, [b.target.name]: [b.target.value] })

    }

    return (
        <div>
            <form>

                <input type="text" value={state.name} name='name' placeholder="Enter Ur Name" onChange={detail} />
                <input type="text" value={state.email} name='email' placeholder="Enter Ur Email" onChange={detail} />
                <input type="text" value={state.profession} name='profession' placeholder="Enter Ur Profession" onChange={detail} />
                <input type="submit" onClick={show} />
            </form>
          

            {
            flag ? <>
               
                </>:
                <>
                <h3>{state.name}</h3>
                <h3>{state.email}</h3>
                <h3>{state.profession}</h3>
                </>

            }
            

        </div>
    );
};
export default BioData;