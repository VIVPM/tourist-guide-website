import React, { useState } from 'react'
import './Dict.css'
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
crossorigin="anonymous"
/>


const Dict = () => {

  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f191a94773mshadec6555bda1f26p1cc84ajsne8bc10f2b4a0',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
};
const [search,setSearch] = useState('')
const [data,setData] = useState('')


const SearchValue=(e)=>{
  e.preventDefault();
  console.log(search)
  fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${search}`, options)
        .then(response => response.json())
        .then((response) => {
          // console.log("api is working")
           console.log(response)
           setData(response.definition)
          //  console.log("data is set")
        })
        .catch(err => console.error(err));
}
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li> */}
            {/* <li className="nav-item dropdown"> */}
              {/* <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a> */}
              {/* <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul> */}
            {/* </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          {/* </ul> */}
          <li className='Boom'>
            <input id="searchInput"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            </li>
            <li>
            <button className="btn btn-outline-success" type="submit" id="searchbtn" onClick={SearchValue}>
              Search
            </button>
            </li>
        </div>
      </div>
    </nav>
    <div>
      <div className="px-4 py-5 my-5 text-center">
        {/* <img
          className="d-block mx-auto mb-4"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEX///8AAAC7u7smJiahoaGwsLBUVFQ0NDQpKSnt7e0iIiL09PT7+/svLy89PT3o6OjLy8vT09OMjIxCQkLh4eEVFRXExMRtbW2amppbW1t2dnYcHBxgYGDa2toPDw+UlJSDg4NLS0u+WCQ8AAADqklEQVRoge2aa7eqIBCGTQE1TVDJC4ro//+Tx1t5CS/tXefDOfOuVStlZh4EhloxhgECgUAgEAj0ffmey7kMWZKwUHLq+T+IQKcA3D0bweNmlJK4uEyqAiIik5/tgk/NSJCgmkW4xkQok3u7fq4ZNZdNFSnih2iK0mI7BInMzR6IbbenonAHHaoTEWq9Lzvh2srG+u57ZnAugNS645mFE8SkLNNWZd7EzoqPXvkespdGTtzkfYC0JHFgzVrMHXoRCJzIxTL3qDSzch7AxmvfOdsqM7ONMLW2CSATLOxih252TWh7ZYeITARCZy103oC2V4YfdRbJ7I6X3kdV2x17uuOJg5530YTG+2nZWxaONUh4Rrqcrn16K/nMjHwYWy9/3BD69bSmTxLG8vqY3vIfHb51o8+v41V6yH6hVz+gG0YyrrFCGuG4pQXsjOOKfvkR3fDrEY9GeHRuG9bSb8MTnaePxs8RPPXgD/qAaJ50q78236EbfMrwmB6bz+jDXhH/im7QZoTn7mmfz9ENd9jXm/3vzW/RDbenv/PL45P0IV/ecQB6/zEAOtCBDnSg/9N0G+hABzrQgQ70r9FvQAc60IH+H9AdoAMd6ED/K3QL6ED/Gn1xbHNEx1QyrOq0zAkhTfvKyzRCSchdzenPBt13eWhmddqHiLsgZVorzKSrDujzSpGFnFxk4aoHGrrPMpFft4JUB/QD5Yrt0JnKD/x/R+9UJzq6n9Qn/fV0ubApnNstsG+OpSmfcRRf0blyXs2ulnOz+xiL28PoXVd0QxUXu2mnF3fVTW4rr3tzuUxQncf3eYS74DM6TxfLpYjLdqHKPsQQo6t6wm2Qxi6KyNDTDSp1K/vRyPCi7qR2RzqdVwlZKQ53jqQ9/mh8pWuQoYlRlimVZQhhFuIonk1g/z470W8UDhOMHg7YDLdLo/boLsMR0SfOZk5utFxJhMPXQ/INuhvi3LprA/1cdytfdUFD96Qi9n6cX8gmmfS26G3GxvvuH1BcM19DZ7r6tlsjVLd6BmGkBLG35/0al+123lkmSdLZZ1EZaLYLwRb0G41WBrbITLmVfTxBUbkw7/J7M88oQzVZhq8UnX7XLZ+3VOGJMkifY0GqS0UEPlPz6HMk5vM6jOCSXjRKnq8gMXzK6RtlFx7HZLkhz+kNPq6b/K2oWVYa+jX7PnqQi58lkMP/pRexV6z5efHh29jpajnv0Rtz/SF5quqrDCk7XSb1UVH2t6YaBAKBQCDQ/6M/22s+e6ce9NIAAAAASUVORK5CYII="
          alt="book image"
          width="72"
          height="57"
        /> */}
        <h2 className="aa display-5 fw-bold  text-body-emphasis text-center font-weight-bold">Your word will appear here</h2>
        {/* <p className="aaa text-center text-uppercase">Your word will appear2 </p> */}
        <div>
          {/* <p className="lead mb-4"><span id="definition">search for any English word.</span></p> */}
          <div>
            <span className="abc col-lg-6 mx-auto" color='blue'>{data}</span>
          </div>
          {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              contact us
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Contribute
            </button>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Dict
