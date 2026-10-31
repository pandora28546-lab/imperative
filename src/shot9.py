import asyncio,sys
from playwright.async_api import async_playwright
from PIL import Image
PLAN=[(0,3,[2.2,3.4]),(1,0,[2,4.6]),(0,3,[2.2,3.4]),(1,0,[2,4.6]),(0,3,[2.2,3.4]),(1,0,[2,4.6])]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch();pg=await b.new_page(viewport={'width':860,'height':2300})
        errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
        await pg.goto('file:///home/claude/run/game2.html');await pg.wait_for_timeout(700)
        for n,(wi,i,times) in enumerate(PLAN):
            win=pg.locator('.win').nth(wi);await win.locator('.chip').nth(i).click();await pg.wait_for_timeout(120)
            bb=await win.locator('.sg-start-btn').bounding_box()
            if bb: await pg.mouse.click(bb['x']+40,bb['y']+40)
            await pg.wait_for_timeout(2900);box=await win.locator('.sg').bounding_box();await pg.screenshot(path=f'q{n}_0.png',clip=box)
            xy=await pg.evaluate('''([wi])=>{var w=window.__w[wi],sc=w.scenes[w.cur],c=sc.S.center(),r=sc.svg.getBoundingClientRect(),v=sc.vb;return [r.left+(c.x-v[0])/v[2]*r.width,r.top+(c.y-v[1])/v[3]*r.height]}''',[wi])
            await pg.mouse.click(xy[0],xy[1]);prev=0
            for k,tt in enumerate(times):
                await pg.wait_for_timeout(int((tt-prev)*1000));prev=tt;box=await win.locator('.sg').bounding_box();await pg.screenshot(path=f'q{n}_{k+1}.png',clip=box)
        print(errs);await b.close()
    W,H=400,267
    for part in range(1):
        o=Image.new('RGB',(W*3+20,(H+8)*6),'white')
        for r in range(6):
            n=part*6+r
            for c in range(3): o.paste(Image.open(f'q{n}_{c}.png').resize((W,H)),(c*(W+10),r*(H+8)))
        o.save(f'g8_{part}.png')
asyncio.run(main())
