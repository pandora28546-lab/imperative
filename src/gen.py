import numpy as np, wave, sys
SR=44100
def env_exp(n,tau): return np.exp(-np.arange(n)/SR/tau)
def note_kalimba(f,dur=1.6,amp=1.0):
    n=int(dur*SR); t=np.arange(n)/SR
    s=np.sin(2*np.pi*f*t)*env_exp(n,0.55)
    s+=0.18*np.sin(2*np.pi*f*5.9*t)*env_exp(n,0.06)
    s+=0.06*np.sin(2*np.pi*f*12.8*t)*env_exp(n,0.02)
    a=np.minimum(1,t/0.003); # attack
    click=np.random.randn(n)*env_exp(n,0.004)*0.08
    return (s*a+click)*amp
def note_metal(f,dur=2.2,amp=1.0):
    n=int(dur*SR); t=np.arange(n)/SR
    s=np.sin(2*np.pi*f*t)*env_exp(n,0.9)
    s+=0.35*np.sin(2*np.pi*f*2.76*t)*env_exp(n,0.25)
    s+=0.12*np.sin(2*np.pi*f*5.40*t)*env_exp(n,0.08)
    s*=np.minimum(1,t/0.002)
    return s*amp
def thud(amp=1.0):
    n=int(0.18*SR); t=np.arange(n)/SR
    f=70+90*np.exp(-t/0.03)
    ph=2*np.pi*np.cumsum(f)/SR
    s=np.sin(ph)*env_exp(n,0.05)
    nz=np.random.randn(n)
    # simple lowpass on noise
    for k in range(3): nz=np.convolve(nz,np.ones(6)/6,'same')
    s+=nz*env_exp(n,0.03)*0.9
    return s*amp
def rustle(dur,amp=1.0):
    n=int(dur*SR); nz=np.random.randn(n)
    hp=nz-np.convolve(nz,np.ones(30)/30,'same')   # highpass-ish
    lp=np.convolve(hp,np.ones(3)/3,'same')
    return lp*amp
def whoosh(dur=0.45,amp=1.0):
    n=int(dur*SR); t=np.arange(n)/SR
    nz=np.random.randn(n)
    w=int(40); lp=np.convolve(nz,np.ones(w)/w,'same')*6
    e=np.sin(np.pi*np.clip(t/dur,0,1))**2
    return lp*e*amp
def mix(total,items):
    out=np.zeros(int(total*SR))
    for t0,s in items:
        i=int(t0*SR); j=min(len(out),i+len(s)); out[i:j]+=s[:j-i]
    return out
def save(name,x):
    x=x/np.max(np.abs(x))*0.9
    fade=int(0.03*SR); x[-fade:]*=np.linspace(1,0,fade)
    with wave.open(name,'wb') as w:
        w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR)
        w.writeframes((x*32767).astype(np.int16).tobytes())
N={'C4':261.63,'D4':293.66,'E4':329.63,'G4':392.0,'A4':440.0,'C5':523.25,'D5':587.33,'E5':659.25,'G5':783.99,'A5':880.0,'C6':1046.5}
B=0.3; L=[B*k for k in range(10)]
mel=['E5','G5','A5','G5','E5','G5','A5','C6','A5','C6']
mel_m=['C5','E5','G5','E5','C5','E5','G5','A5','G5','A5']  # metallophone sits lower
np.random.seed(3)
save('snd/run_kalimba.wav',mix(4.6,[(t,note_kalimba(N[m],amp=0.8 if i%2 else 1)) for i,(t,m) in enumerate(zip(L,mel))]))
save('snd/run_metal.wav',mix(5.0,[(t,note_metal(N[m],amp=0.75 if i%2 else 1)) for i,(t,m) in enumerate(zip(L,mel_m))]))
# natural steps: whoosh at launch, thuds + grass rustle at each landing
items=[(0.0,whoosh(0.5,0.5))]
for i,t in enumerate(L):
    items.append((t-0.01,thud(1.0-0.04*i)))
    items.append((t,rustle(0.12,0.25)*env_exp(int(0.12*SR),0.04)))
save('snd/run_steps.wav',mix(3.5,items))
# finishes (start right when hare stops)
arp=['C5','E5','G5','C6']
save('snd/fin_kalimba.wav',mix(3.0,[(0.09*i,note_kalimba(N[m],2.4,0.9)) for i,m in enumerate(arp)]+[(0.55,note_kalimba(N['C5'],2.4,0.5)+0)]))
save('snd/fin_metal.wav',mix(3.4,[(0.09*i,note_metal(N[m],2.8,0.9)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.55,note_metal(N['E5'],2.8,0.5))]))
# idle hop blip (tiny, for tap before the command)
save('snd/boop.wav',note_kalimba(N['G4'],0.7,1.0))
