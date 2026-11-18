import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, CheckCircle2, MessageSquare, ThumbsUp, 
  Share2, ShieldCheck, Sparkles, Filter, CornerDownRight, 
  ChevronRight, ArrowRight 
} from 'lucide-react';
import { reviewsData, clinicInfo } from '../data/clinicData';
import ScrollReveal from '../components/ScrollReveal';

export default function ReviewsPage({ onOpenReviewModal }) {
  const [filterTag, setFilterTag] = useState('All');

  const filterOptions = [
    'All',
    'humble doctor',
    'composed doctor',
    'calm doctor',
    'experienced doctor',
    'Dog Care',
    'Cat Care'
  ];

  const filteredReviews = reviewsData.filter(rev => {
    if (filterTag === 'All') return true;
    if (filterTag === 'Dog Care') return rev.petType.includes('Dog') || rev.petType.includes('Retriever') || rev.petType.includes('Labrador') || rev.petType.includes('Beagle') || rev.petType.includes('Shepherd');
    if (filterTag === 'Cat Care') return rev.petType.includes('Cat');
    return rev.tags.some(t => t.toLowerCase().includes(filterTag.toLowerCase()));
  });

  return (
    <div className="pt-28 sm:pt-32 pb-16 page-enter">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-slate-50 to-white py-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-down" delay={50}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
              <Link to="/" className="hover:text-emerald-800">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-emerald-800 font-bold">Google Reviews (4.6★)</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <ScrollReveal animation="fade-up" delay={100} className="max-w-2xl space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>Verified Google Reviews</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                Trusted by 789+ Pet Parents in Vadodara
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                Transparent experiences, diagnosis feedback, and recovery stories from our clients across Akota, Alkapuri, and Vadodara.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={180}>
              <button
                onClick={onOpenReviewModal}
                className="px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Write a Review</span>
              </button>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Dashboard Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-200/70">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Score Big Display (4 cols) */}
              <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-5xl sm:text-6xl font-display font-black text-slate-900">
                    {clinicInfo.rating}
                  </span>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-amber-400' : 'fill-amber-400/60'}`} />
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">
                      Based on <strong className="text-slate-800">{clinicInfo.reviewCount}</strong> Google reviews
                    </p>
                  </div>
                </div>
                <p className="text-xs text-emerald-800 font-semibold">
                  ✓ 94% positive sentiment across clinical outcomes & humble doctor interactions
                </p>
              </div>

              {/* Star Distribution Bars (5 cols) */}
              <div className="md:col-span-5 space-y-2 text-xs">
                {[
                  { star: 5, pct: 84 },
                  { star: 4, pct: 10 },
                  { star: 3, pct: 3 },
                  { star: 2, pct: 1 },
                  { star: 1, pct: 2 },
                ].map(item => (
                  <div key={item.star} className="flex items-center gap-2">
                    <span className="w-3 font-bold text-slate-700">{item.star}</span>
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-slate-400 font-medium">{item.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Common Review Highlights (3 cols) */}
              <div className="md:col-span-3 space-y-2 text-xs border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-6">
                <p className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">
                  Common Google Mentions
                </p>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 italic text-slate-700">
                  “Best place for pet owners to take for a medical check up”
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 italic text-slate-700">
                  “Well stocked supplies of pet food, medicine and accessories.”
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilterTag(opt)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filterTag === opt
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {opt === 'All' ? 'All (789 Reviews)' : opt}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Reviews Grid with Staggered On-Scroll Animation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev, idx) => (
              <ScrollReveal key={rev.id} animation="fade-up" delay={(idx % 3) * 120}>
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-4 h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-950 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <h2 className="font-bold text-sm text-slate-900 leading-tight">
                            {rev.author}
                          </h2>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {rev.badge}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] text-slate-400 font-medium shrink-0">
                        {rev.date}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">
                        {rev.petType}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      "{rev.content}"
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {rev.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {rev.ownerResponse && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-950 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-[11px]">
                        <CornerDownRight className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Response from Baroda Pet Clinic:</span>
                      </div>
                      <p className="text-emerald-900 leading-relaxed text-[11px]">
                        "{rev.ownerResponse}"
                      </p>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Google Review
                    </span>
                    <span>Munjmahuda, Akota</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
