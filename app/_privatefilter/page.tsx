import React from 'react'

const page = () => {
  return (
    <div>
        this private folder top put thinges on it that you want not be seen for the user when 
        you write the folder name in the url beside localhost 3000  _privatefolder it 
        will send you to not found page  

        [auth] folder this is folder contain two folder sign in and login but when you write auth 
        or auth/sign in url is not work but when you write sign in or login it work i don not see any benfit from it 

        [...signin] when you put folder in this case when you write any thing after this folder name beside url 
        expample localhost/3000/signin/wsss it will return to the page that you still in not send you to the 
        found page 

        mazenemad123456789 this is the password for my project in superbase
    </div>
  )
}

export default page