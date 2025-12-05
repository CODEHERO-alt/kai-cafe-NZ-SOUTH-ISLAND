export default function Footer(){
return (
<footer className="bg-white border-t py-6 mt-8">
<div className="container px-4 text-sm text-gray-600">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
<div>
<div className="font-semibold">Norka's Kai</div>
<div>Queenstown Marina, Sugar Lane, Shed 11</div>
<div className="mt-1">Phone: <a href="tel:+642102767057" className="text-[var(--brand-1)]">+64 210 276 7057</a></div>
</div>
<div className="text-xs">© {new Date().getFullYear()} Norka's Kai • Pet & boat friendly • Vegan & GF options</div>
</div>
</div>
</footer>
)
}
