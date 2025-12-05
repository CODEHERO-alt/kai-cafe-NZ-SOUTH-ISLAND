export default function Hero(){
return (
<section className="w-full bg-[var(--brand-1)]/5 pb-8">
<div className="container pt-6 px-4">
<div className="flex items-start gap-4">
<div className="flex-1">
<h2 className="text-2xl font-extrabold">Hello, coffee lover ☕</h2>
<p className="mt-2 text-gray-700">Pet & boat friendly lakefront cafe — fresh coffee, matcha, smoothies, bagels and gluten-free treats. Sit by the water or takeaway.</p>
<div className="mt-4 flex gap-3">
<a href="tel:+642102767057" className="px-4 py-2 rounded-md bg-[var(--brand-2)] font-semibold">Call +64 210 276 7057</a>
<a href="https://maps.app.goo.gl/" className="px-4 py-2 rounded-md border">Get directions</a>
</div>
<ul className="mt-4 text-sm text-gray-600">
<li><strong>Address:</strong> Queenstown Marina, Sugar Lane, Shed 11, Frankton, Queenstown 9300</li>
<li><strong>Hours:</strong> Mon–Sun 9:00–16:00 (Public Holidays 10:00–15:00)</li>
</ul>
</div>
<div className="w-36 hidden md:block">
<img className="rounded-lg hero-float shadow-lg" src="https://norkaskai.co.nz/wp-content/uploads/2023/12/untitled-design-25.png" alt="pattern"/>
</div>
</div>
</div>
</section>
)
}
