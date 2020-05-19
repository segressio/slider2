const items = document.querySelector('.portfolio-content'),
portfolioDots=document.querySelector('.portfolio-dots'),
buttons= document.querySelectorAll('.portfolio-btn');
let timer;
let dotCount=items.querySelectorAll('li').length;
dotAdder();

function dotAdder()
{
    
  
    for (let index=0;index<dotCount;index++)
    {
        let newDot = document.createElement("li"); 
    newDot.classList.add('dot');
    newDot.id=index;
    portfolioDots.append(newDot);

        portfolioDots.append(newDot);
    }
}

    items.addEventListener('click',(e)=>
{
 clearInterval(timer);
    e.preventDefault();
    timer= setTimeout(animateSlide,5000);
    if (e.target.classList.contains('prev'))
    {
        
       
        count--;
        if (count<0)
        {count=dotCount-1;}
        addClass(items,count,"portfolio-item-active");
    addClass(portfolioDots,count,"dot-active")
    }
    else
    {
        count++;
        if (count>dotCount-1)
        {
            count=0;
        }
        
        addClass(items,count,"portfolio-item-active");
    addClass(portfolioDots,count,"dot-active")
    }
})

portfolioDots.addEventListener('click',(e)=>
{
    
    if (e.target.closest('.dot')==null)
    {
        return
        
    }
    addClass(items,e.target.id,"portfolio-item-active");
    addClass(portfolioDots,e.target.id,"dot-active")
})
function addClass(item,index,classStyle)
{
    item=item.querySelectorAll('li');
item.forEach(element => {
    element.classList.remove(classStyle);
});
item[index].classList.add(classStyle);
}
let count=0;
function animateSlide()

{
    if (count>dotCount-1)
{
    count=0;
}
    addClass(items,count,"portfolio-item-active");
    addClass(portfolioDots,count,"dot-active")
    count++;
   timer= setTimeout(() => {
        animateSlide();
    }, 1000);
}
items.addEventListener('mouseover',()=>
{
    clearInterval(timer);
})
items.addEventListener('mouseleave',()=>
{
    timer= setTimeout(animateSlide,3000);
})
animateSlide()