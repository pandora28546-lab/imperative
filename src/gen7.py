import numpy as np
exec(open('gen3.py').read().split("np.random.seed(11)")[0])
np.random.seed(51)
def noise_burst(dur,lp=6,amp=1.0,tau=None):
    n=int(dur*SR);t=np.arange(n)/SR;nz=np.random.randn(n);nz=np.convolve(nz,np.ones(lp)/lp,'same')
    e=np.exp(-t/(tau or dur/3))*np.minimum(1,t/0.004);return nz*e*amp
def water(dur,amp=1.0):
    n=int(dur*SR);t=np.arange(n)/SR;nz=np.random.randn(n);hp=nz-np.convolve(nz,np.ones(20)/20,'same')
    e=np.minimum(1,t/0.15)*np.minimum(1,(dur-t)/0.25);mod=.7+.3*np.sin(2*np.pi*7*t);return hp*e*mod*amp
def pop(amp=1.0):
    n=int(0.12*SR);t=np.arange(n)/SR;f=500*np.exp(-t/0.02)+200
    s=np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-t/0.03)*amp;nb=noise_burst(0.04,3,0.4*amp);s[:len(nb)]+=nb;return s
def enc(name,total,it): save('snd/'+name+'.wav',mix(total,it))
FIN=lambda a,b:[(0.08*i,note_marimba(N[m],1.4,0.72)) for i,m in enumerate(a)]+[(0.34+0.09*i,note_metal(N[m],2.6,0.62)) for i,m in enumerate(b)]
# КОПАЙ 3.0: 6 гребков по 0.45
it=[]
for k in range(6):
    t=0.45*k;it+=[(t,thud(0.8)),(t+0.02,noise_burst(0.18,8,0.5)),(t,note_marimba(N[['C4','G3','A3','E4','C4','G3'][k]],1.0,0.6))]
it+=[(2.7,note_metal(N['E5'],2.4,0.55))];enc('run_dig',5.0,it);enc('fin_dig',3.4,FIN(['G3','C4','E4'],['C5','E5']))
# ЛОВИ 1.6: прыжок, ловит на 0.6
it=[(0.3+0.06*i,note_marimba(N[m],0.8,0.6)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.6,note_metal(N['G5'],2.2,0.7)),(0.9,shaker(0.4)),(1.2,note_metal(N['E5'],2.0,0.5))]
enc('run_catch',3.6,it);enc('fin_catch',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))
# НЕСИ 4.0: шажки 0.25, мотив каждые 0.5
it=[(0.25*k,shaker(0.28)) for k in range(16)]+[(0.5*k,note_marimba(N[m],0.8,0.55)) for k,m in enumerate(['C5','D5','E5','G5','E5','D5','C5','E5'])]
it+=[(t,note_metal(N[m],2.4,0.5)) for t,m in [(0,'C5'),(2.0,'G4')]];enc('run_carry',6.0,it);enc('fin_carry',3.4,FIN(['C4','E4','G4'],['C5','E5','G5']))
# ТЯНИ 2.6: три рывка, «чпок» в 1.8, плюх в 2.0
it=[(t,note_marimba(N[m],0.9,0.7)) for t,m in [(0,'C4'),(0.6,'D4'),(1.2,'E4')]]+[(t,noise_burst(0.3,10,0.35)) for t in [0,0.6,1.2]]
it+=[(1.8,pop(0.9)),(1.8,note_metal(N['G5'],2.4,0.65)),(2.05,thud(0.7))];enc('run_pull',4.4,it);enc('fin_pull',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))
# КАТИ 4.0: перекаты 0.25 вниз-вверх, толчки каждую секунду
it=[(0.25*k,note_marimba(N[['G4','E4','D4','C4'][k%4]],0.7,0.5)) for k in range(16)]+[(1.0*k,swish(0.4,0.3)) for k in range(4)]+[(t,note_metal(N[m],2.4,0.5)) for t,m in [(0,'E5'),(2.0,'G5')]]
enc('run_roll',6.2,it);enc('fin_roll',3.4,FIN(['C4','E4','G4'],['C5','E5','G5']))
# МОЙ 3.0: 8 движений по 0.375, плеск
it=[]
for k in range(8):
    t=0.375*k;it+=[(t,bubble(380+40*(k%3),0.45)),(t+0.05,water(0.25,0.25)),(t,note_marimba(N[['C5','A4','G4','A4'][k%4]],0.7,0.5))]
it+=[(2.8,note_metal(N['C6'],2.4,0.5))];enc('run_wash',5.2,it);enc('fin_wash',3.4,FIN(['C4','E4','G4'],['E5','G5']))
# БРОСЬ 2.4: замах, бросок в 0.5, полёт, в корзину в 1.7
it=[(0.0,note_marimba(N['G3'],0.8,0.6)),(0.5,swish(0.4,0.45))]+[(0.55+0.15*i,note_marimba(N[m],0.8,0.55)) for i,m in enumerate(['C4','E4','G4','A4','C5','E5','G5','A5'])]+[(1.7,woodblock(560,0.8)),(1.7,note_metal(N['C5'],2.4,0.65))]
enc('run_throw',4.4,it);enc('fin_throw',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))
# ЕШЬ 2.4: хрум-хрум 0.15
it=[(0.15*k,woodblock(1100+60*(k%3),0.35)) for k in range(16)]+[(0.15*k,noise_burst(0.05,2,0.25)) for k in range(16)]+[(0.6*k,note_marimba(N[m],0.9,0.55)) for k,m in enumerate(['C4','E4','G4','E4'])]
enc('run_eat',4.4,it);enc('fin_eat',3.4,FIN(['C4','E4','G4'],['C5','E5']))
# ПЕЙ 2.8: лак-лак 0.35
it=[(0.35*k,bubble(300+30*(k%2),0.5)) for k in range(8)]+[(0.7*k,note_marimba(N[m],1.0,0.5)) for k,m in enumerate(['E4','G4','A4','G4'])]+[(0,note_metal(N['C5'],2.6,0.45))]
enc('run_drink',4.8,it);enc('fin_drink',3.4,FIN(['C4','E4','G4'],['C5','G5']))
# ДУЙ 2.6: вдох, дуновение 0.6–1.6, пушинки летят
it=[(0.0,note_marimba(N['C4'],1.0,0.5)),(0.6,swish(1.0,0.55))]+[(0.8+0.25*i,note_metal(N[m],2.2,0.45)) for i,m in enumerate(['C6','A5','G5','E5','D5','C5'])]
enc('run_blow',4.6,it);enc('fin_blow',3.4,FIN(['C4','E4','G4'],['E5','G5']))
# ПОЛИВАЙ 4.6: струя 0.4–4.0, цветы 1.6, 2.6, 3.6
it=[(0.4,water(3.6,0.35)),(0,note_marimba(N['G3'],1.0,0.6))]+[(t,note_metal(N[m],2.4,0.6)) for t,m in [(1.6,'C5'),(2.6,'E5'),(3.6,'G5')]]+[(t,note_marimba(N[m],0.9,0.5)) for t,m in [(1.6,'C4'),(2.6,'E4'),(3.6,'G4')]]
enc('run_water',6.6,it);enc('fin_water',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))
