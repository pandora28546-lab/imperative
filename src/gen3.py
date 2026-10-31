import numpy as np
exec(open('gen.py').read().split("\nN={")[0])
_g2=open('gen2.py').read(); exec(_g2[_g2.index('def note_marimba'):_g2.index("\nN={'G3'")])
N={'G3':196.0,'A3':220.0,'C4':261.63,'D4':293.66,'E4':329.63,'G4':392.0,'A4':440.0,'C5':523.25,'D5':587.33,'E5':659.25,'G5':783.99,'A5':880.0,'C6':1046.5}
def swish(dur=0.22,amp=1.0):
    n=int(dur*SR); t=np.arange(n)/SR; nz=np.random.randn(n)
    bp=nz-np.convolve(nz,np.ones(14)/14,'same'); bp=np.convolve(bp,np.ones(4)/4,'same')
    e=np.sin(np.pi*np.clip(t/dur,0,1))**2
    return bp*e*amp
def plop(amp=1.0):
    n=int(0.16*SR); t=np.arange(n)/SR
    f=900*np.exp(-t/0.025)+180
    s=np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-t/0.05)
    return s*np.minimum(1,t/0.003)*amp
def bubble(f0=380,amp=1.0):
    n=int(0.09*SR); t=np.arange(n)/SR
    f=f0*(1+2.2*t/0.09)
    return np.sin(2*np.pi*np.cumsum(f)/SR)*np.sin(np.pi*t/0.09)*amp
np.random.seed(11)
# ЛЕТИ: взмах каждые 0.36 с, 10 взмахов, посадка в 3.6 с. Выше и воздушнее: маримба вверх-вниз, металлофон тянет, шейкер-«ветер»
FL=[0.36*k for k in range(10)]
mar=['C4','E4','G4','A4','C5','A4','G4','A4','C5','E5']
it=[(t,note_marimba(N[m],amp=0.75)) for t,m in zip(FL,mar)]
it+=[(t,swish(0.24,0.35)) for t in FL]
it+=[(t,note_metal(N[m],3.0,0.8)) for t,m in [(0,'E5'),(1.44,'G5'),(2.88,'A5')]]
save('snd/run_fly.wav',mix(5.6,it))
save('snd/fin_fly.wav',mix(3.6,[(0.08*i,note_marimba(N[m],1.4,0.75)) for i,m in enumerate(['C4','G4','C5'])]+[(0.3+0.1*i,note_metal(N[m],2.8,0.7)) for i,m in enumerate(['C5','E5','G5'])]))
# ПРЫГАЙ: 4 прыжка, отрыв 0.6k, приземление 0.6k+0.5 — маримба «пру-жинка» на отрыве, плюх + металлофон на приземлении
it=[]
up=['C5','E5','G5','A5']
for k in range(4):
    t0=0.6*k
    it+=[(t0,note_marimba(N['G4'],amp=0.7)),(t0+0.06,note_marimba(N['C5'],amp=0.75))]
    it+=[(t0+0.5,plop(0.7)),(t0+0.5,note_metal(N[up[k]],2.2,0.75)),(t0+0.5,shaker(0.4))]
save('snd/run_jump.wav',mix(4.6,it))
save('snd/fin_jump.wav',mix(3.4,[(0.08*i,note_marimba(N[m],1.4,0.75)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.35+0.09*i,note_metal(N[m],2.6,0.65)) for i,m in enumerate(['E5','G5','C6'])]))
# ПЛЫВИ: гребок хвостом каждые 0.5 с, 8 гребков, 4.0 с. Ниже и плавнее, пузырьки
SW=[0.5*k for k in range(8)]
low=['C4','G3','A3','E4','C4','G3','A3','C4']
it=[(t,note_marimba(N[m],1.2,0.7)) for t,m in zip(SW,low)]
it+=[(t+0.05,swish(0.4,0.22)) for t in SW]
it+=[(t,note_metal(N[m],3.0,0.75)) for t,m in [(0,'E5'),(1.0,'D5'),(2.0,'C5'),(3.0,'G4')]]
it+=[(t,bubble(f,0.35)) for t,f in [(0.3,360),(0.42,440),(1.3,400),(2.2,380),(2.33,470),(3.2,420)]]
save('snd/run_swim.wav',mix(6.2,it))
save('snd/fin_swim.wav',mix(3.8,[(0.12*i,note_metal(N[m],2.8,0.7)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.1,note_marimba(N['C4'],1.4,0.6))]+[(0.5+0.11*i,bubble(380+60*i,0.35)) for i in range(4)]))
