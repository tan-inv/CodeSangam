import React, { useEffect } from 'react';



export default function Starfield() {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.innerHTML = `var starfield=null;function loop(){anim_id=window.requestAnimationFrame(update)}function update(t){starfield.update(t),loop()}function Vector2(t,i){this.x=t,this.y=i}function Vector3(t,i,s){this.x=t,this.y=i,this.z=s}function rand_range(t,i){return t+Math.random()*(i-t)}function jsStarfield(){this.stars=[],this.max_depth=500,this.max_size=4,this.speed=50,this.amount=500,this.follow_mouse=!1,this.method="rects",this.last_frame=0,this.fps_time=0,this.fps_count=0,this.fps=0,this.origin=new Vector2(0,0),this.init=function(t){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.resize(window.innerWidth,window.innerHeight),this.ctx.font="18px Arial",this.init_stars()},this.set_amount=function(t){if(this.amount=Math.floor(t),this.amount<this.stars.length)this.stars.length=this.amount;else for(var i=this.amount-this.stars.length,s=0;s<i;s++)this.stars.push(new Vector3(rand_range(-this.canvas.width,this.canvas.width),rand_range(-this.canvas.height,this.canvas.height),rand_range(1,this.max_depth)))},this.init_stars=function(){for(var t=0;t<this.amount;t++)this.stars.push(new Vector3(rand_range(-this.canvas.width,this.canvas.width),rand_range(-this.canvas.height,this.canvas.height),rand_range(1,this.max_depth)))},this.update=function(t){var i=(t-this.last_frame)*.001;this.update_stars(i),"rects"===this.method?this.draw_rects():this.draw_buffer(),this.draw_fps(i),this.last_frame=t},this.update_stars=function(t){for(var i=this.speed*t,s=0;s<this.stars.length;s++){var a=this.stars[s];a.z-=i,a.z<=0&&(a.x=rand_range(-this.canvas.width,this.canvas.width),a.y=rand_range(-this.canvas.height,this.canvas.height),a.z=this.max_depth)}},this.resize=function(t,i){this.canvas.width=t,this.canvas.height=i,this.canvas.style.width=t+"px",this.canvas.style.height=i+"px",this.img_data=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),this.reset_origin()},this.draw_rects=function(){this.ctx.fillStyle="rgb(255,255,255)",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.stars.length;t++){var i=this.stars[t],s=256/i.z,a=i.x*s+this.origin.x,h=i.y*s+this.origin.y,n=(this.max_depth-i.z)/this.max_depth*this.max_size;this.ctx.fillRect(a,h,n,n)}},this.draw_buffer=function(){var t,i,s=0,a=this.img_data.data.length,h=4*this.img_data.width;for(s=0;s<a;s++)this.img_data.data[s]=0;for(var n=0;n<this.stars.length;n++){var e=this.stars[n],r=256/e.z,t=Math.floor(e.x*r+this.origin.x),i=Math.floor(e.y*r+this.origin.y);t>0&&t<this.canvas.width&&i>0&&i<this.canvas.height&&(s=i*h+4*t,this.img_data.data[s]=255,this.img_data.data[s+1]=255,this.img_data.data[s+2]=255,this.img_data.data[s+3]=(this.max_depth-e.z)/this.max_depth*255)}this.ctx.putImageData(this.img_data,0,0)},this.draw_fps=function(t){this.fps_time+=t,this.fps_count++,this.fps_time>1&&(this.fps=Math.floor(this.fps_count/this.fps_time),this.fps_time=0,this.fps_count=0)},this.set_origin=function(t,i){this.origin.x=t,this.origin.y=i},this.reset_origin=function(){this.origin.x=this.canvas.width/2,this.origin.y=this.canvas.height/2}}window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,window.onload=function(){(starfield=new jsStarfield).init("main_canvas"),loop()},window.addEventListener("resize",function(){starfield.resize(window.innerWidth,window.innerHeight)});`;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    
    return (
        <canvas className='fixed' id="main_canvas">
        </canvas>
    )
}
