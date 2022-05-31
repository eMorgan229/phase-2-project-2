import React from 'react'

function HomeDropDown({handleChange, handleChange1}) {

  return (
    <div>
          <select onChange={(e) => handleChange(e)}> 
            <option defaultValue value="https://images.metmuseum.org/CRDImages/ep/original/DP367958.jpg">Madonna and Child with the Annunciation and the Nativity </option>
            <option  value="https://images.metmuseum.org/CRDImages/dp/original/DP863220.jpg">The Death of Camilla</option>
            <option  value="https://images.metmuseum.org/CRDImages/ep/original/DT228288.jpg">Head of a Donor</option>
            <option value="https://images.metmuseum.org/CRDImages/ep/original/DT5526.jpg">Wolf and Fox Hunt</option>
            <option value="https://images.metmuseum.org/CRDImages/ep/original/DT11332.jpg">Domestic Scene"</option>
            <option value="https://images.metmuseum.org/CRDImages/ep/original/DT2167.jpg">Albert (René) Grenier (1858 - 1925)</option>
            <option value="https://images.metmuseum.org/CRDImages/ep/original/DP169627.jpg">Ariadne</option>
            <option value="https://images.metmuseum.org/CRDImages/dp/original/DPB883134.jpg">When the Swallows Homeward Fly, from the Jokes series (N87) for Duke brand cigarettes"</option>
            <option value="https://images.metmuseum.org/CRDImages/dp/original/DP838885.jpg">George R. Jones, The New York Times, from the American Editors series (N35) for Allen and Ginter Cigarettes</option>

        </select>
       
    </div>
  )
}

export default HomeDropDown