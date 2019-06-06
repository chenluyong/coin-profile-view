function readJson(filename)
{
    $.getJSON (filename, function (data)
    {
        return data;
    });
}
