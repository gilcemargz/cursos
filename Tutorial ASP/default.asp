<% @LANGUAGE="VBSCRIPT"%>    
<%Option Explicit%>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Teste</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <%
    Sub vbProc(num1, num2)
        Response.Write(num1*num2)
    End Sub
    Public Function teste(num1, num2)
        
        teste = num1*num2
        
    End Function
    %>
</head>
<body>

    <%
    Dim carro
    Dim carra
    Dim nomes(5)
    Dim nome
    Dim tabela(3,2)
    Dim i, j

    nomes(0) = "Gilcemar"
    nomes(1) = "Pedro"
    nomes(2) = "Alicia"
    nomes(3) = "Camila"
    nomes(4) = "Joana"
    nomes(5) = "Jess"
    
    tabela(0,0) = "1"
    tabela(1,0) = "3"
    tabela(2,0) = "5"
    tabela(0,1) = "2"
    tabela(1,1) = "4"
    tabela(2,1) = "6"

    for i=0 to 3
        Response.Write("<p>")
        for j=0 to 2
            Response.Write(tabela(i,j) & " ")
        next
        Response.Write("</p>")
    next

    'nome = substring(nomes(0), 0, 4)
    Response.Write(nomes(0))
    Response.Write("</br>")

    carra = "MB"
    carro = "VW"
    Response.Write(carro)
    Response.Write("</br>")
    Response.Write(carra)
    Response.Write("</br>")
    %>
    
    <%
    Response.Write(carro)
    %>

    <%
    Response.Write("<h1>Hello world</h1>")
    Response.Write("<h2>Tutorial ASP</h2>")
     %>

     <%
     = "<p style='color:red'>Outro tipo de write</p>"
     %>

    <!--
    <input type="number" name="nume1" id="">
    <input type="number" name="nume2" id="">
    -->
    
    <p>
        Resultado: <%
                    call vbProc(2,9)
                   %>
    </p>

    <p>
        <%
            Response.Write("O resultado da função foi: " & teste(2,9))
            Dim result 
            result = teste(2,9)
            Response.Write("</br>Result na variável:" & result)
        %>
    </p>

    <p>
        <%
            if carro="VW" then Response.Write("O carro é da VW")
            if carro="VW" then
                Response.Write("</br>Correto")
                Response.Write("</br>E digo mais, não te digo nada")
            end if
            if carro="MB" then
                Response.Write("Teste")
            else
                Response.Write("</br>Caiu no else")
            end if
            If carro="MB" Then
                Response.Write("TEste")
            Elseif carro="VW" then
                Response.Write("</br>Caiu no elseif")
            End if
        %>
        
    </p>
         
    <p>
        <%
            Dim hoje
            hoje=weekDay(Date)

            Select Case hoje
                Case 1
                    response.write("Sleepy Sunday")
                Case 2
                    response.write("Monday again!")
                Case 3
                    response.write("Just Tuesday!")
                Case 4
                    response.write("Wednesday!")
                Case 5
                    response.write("Thursday...")
                Case 6
                    response.write("Finally Friday!")
                Case Else
                    response.write("Super Saturday!!!!")
            End Select

        %>
    </p>
    
    <p>
        <%
            For i=0 To 10 step 2
                Response.Write("</br>" & i)
                if i=6 then exit for
            Next
        %>
    </p>

    <p>
        <%
            Dim x
            For each x in nomes
                Response.Write("</br>" & x )
            Next
        %>
    </p>

    <p>
        <%
            i = 0
            Response.Write("DO_WHILE_LOOP </br>")
            Do While i<10 
                Response.Write(i & "-")
                i = i + 1
            Loop
            Response.Write("</br> i = " & i &  "</br>")

            i = 0
            Response.Write("DO_LOOP_WHILE </br>")
            Do
                Response.Write(i & "-")
                i = i + 1
            Loop While i<10

            Response.Write("</br> i = " & i &  "</br>")
            
            i=0
            Response.Write("DO_UNTIL_LOOP </br>")
            Do Until i>10
                Response.Write(i & "-")
                i = i + 1
                if i=5 then exit do
            Loop
        %>
        
    </p>

    <form action="#" method="post">
        Your name: <input type="text" name="fname" size="20" />
        <input type="submit" value="Submit" />
    </form>
    <%
    dim fname
    fname=Request.QueryString("fname")
    fname=Request.Form("fname")
    If fname<>"" Then
        Response.Write("Hello " & fname & "!<br>")
        Response.Write("How are you today?")
    End If
    %>

    <%
        Response.Cookies("firstname")="Alex"
    %>

    </br>
    <%
        fname=Request.Cookies("firstname")
        response.write("Firstname=" & fname)
    %>

    <p>
        <%
            Response.Cookies("user")("firstname")="John"
            Response.Cookies("user")("lastname")="Smith"
            Response.Cookies("user")("country")="Norway"
            Response.Cookies("user")("age")="25"
        %>
    </p>

    <%
    dim y
    for each x in Request.Cookies
    response.write("<p>")
    if Request.Cookies(x).HasKeys then
        for each y in Request.Cookies(x)
        response.write(x & ":" & y & "=" & Request.Cookies(x)(y))
        response.write("<br>")
        next
    else
        Response.Write(x & "=" & Request.Cookies(x) & "<br>")
    end if
    response.write "</p>"
    next
    %>

    <%
        dim myMail
        Set myMail = CreateObject("CDO.Message")
        myMail.Subject = "Sending email with CDO"
        myMail.From = "gilcemargz@hotmail.com"
        myMail.To = "gilcemargz@gmail.com"
        myMail.TextBody = "This is a message."
        myMail.Send
        set myMail = nothing
    %>

</body>
</html>