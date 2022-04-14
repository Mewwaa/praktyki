function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="tomtom@tomtom.com"&& password=="tomtom")
    {
        document.getElementById("alert").hidden = true;
        return false;
    }
    else
    {

        document.getElementById("alert").hidden = false; 
    }
}