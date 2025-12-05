import Link from 'next/link'
export default function Header(){
return (
<header className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
<div className="container flex items-center justify-between py-3 px-4">
<div className="flex items-center gap-3">
<img src="https://norkaskai.co.nz/wp-content/uploads/2023/12/norkas-kai-vector.png" alt="Norka's Kai logo" className="w-12 h-12 object-contain" />
<div>
<h1 className="text-lg font-bold">Norka's Kai</h1>
<p className="text-xs text-gray-600">Lakefront café • Frankton Marina</p>
</div>
</div>
<nav className="text-sm">
<a href="#menu" className="mr-4">Menu</a>
<a href="#about" className="mr-4">About</a>
<a href="#contact" className="bg-[var(--brand-2)] text-black px-3 py-1 rounded-md">Call</a>
</nav>
</div>
</header>
)
}
