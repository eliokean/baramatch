import React, { useState } from "react";
import {
  Calendar as IconCalendar,
  Clock as IconClock,
  MapPin,
  TrendingUp,
  XCircle,
  CheckCircle,
  Phone,
  MessageSquare,
} from "lucide-react";

/**
 * Dashboard.jsx
 * - section Demandes (2 demandes)
 * - section Agenda (Jour / Semaine / Mois)
 * - styles Tailwind pour coller aux maquettes
 */

const demandesData = [
  {
    id: 1,
    initials: "AK",
    color: "bg-gradient-to-br from-[#00B4D8] to-[#40C4A9]",
    titre: "Construction extension",
    client: "Aminata Keita",
    description: "Extension de maison 30m² avec dalle béton et murs en parpaing",
    date: "15 Oct 2025",
    heure: "09:00",
    lieu: "Bamako, Kalaban-Coura",
    budget: "450000 FCFA",
    badge: "Nouveau",
  },
  {
    id: 2,
    initials: "OD",
    color: "bg-gradient-to-br from-[#4F9CFF] to-[#12B886]",
    titre: "Rénovation salle de bain",
    client: "Oumar Diarra",
    description: "Rénovation complète : carrelage, plomberie et peinture",
    date: "20 Oct 2025",
    heure: "10:30",
    lieu: "Bamako, Magnambougou",
    budget: "380000 FCFA",
    badge: "Nouveau",
  },
];

const agendaData = {
  jour: [
    { heure: "09:00", titre: "Construction garage", client: "Youssouf Diallo" },
    { heure: "14:00", titre: "Réparation toiture", client: "Fatoumata Koné" },
  ],
  semaine: [
    { jour: "Lun", date: 13, events: [] },
    { jour: "Mar", date: 14, events: [] },
    { jour: "Mer", date: 15, events: [] },
    {
      jour: "Jeu",
      date: 16,
      events: [{ heure: "09:00", titre: "Construction extension", small: true }],
    },
    {
      jour: "Ven",
      date: 17,
      events: [{ heure: "14:00", titre: "Réparation toiture", small: true }],
    },
    { jour: "Sam", date: 18, events: [] },
    { jour: "Dim", date: 19, events: [] },
  ],
  mois: [
    { jour: "01 Oct", titre: "Réunion chantier" },
    { jour: "07 Oct", titre: "Livraison matériaux" },
    { jour: "15 Oct", titre: "Extension maison" },
    { jour: "20 Oct", titre: "Rénovation salle de bain" },
  ],
};

function HeaderCards(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-2xl-lg shadow-soft p-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <div className="text-blue-600"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7v4c0 1.1.9 2 2 2h2" stroke="#0b76ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        </div>
        <div>
          <div className="text-2xl font-semibold">245</div>
          <div className="text-sm text-gray-500 mt-1">Travaux réalisés</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl-lg shadow-soft p-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
          <div className="text-yellow-600 font-bold">★</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">4.9/5</div>
          <div className="text-sm text-gray-500 mt-1">127 avis</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl-lg shadow-soft p-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <div className="text-green-600">⬆</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">3.3M</div>
          <div className="text-sm text-gray-500 mt-1">Revenus FCFA</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl-lg shadow-soft p-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
          <div className="text-orange-600">⏱</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">3</div>
          <div className="text-sm text-gray-500 mt-1">Nouvelles demandes</div>
        </div>
      </div>
    </div>
  );
}

function DemandCard({d}){
  return (
    <div className="bg-white rounded-2xl-lg shadow-soft p-6 mb-6">
      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-4 items-start">
          <div className={`pastille ${d.color}`}>{d.initials}</div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{d.titre}</h3>
              <span className="badge-new">{d.badge}</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">{d.client}</div>
            <p className="text-gray-500 mt-3 max-w-2xl">{d.description}</p>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <IconCalendar size={16} /> <span>{d.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconClock size={16} /> <span>{d.heure}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> <span className="truncate">{d.lieu}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <TrendingUp size={16} /> <span>{d.budget}</span>
              </div>
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="flex flex-col items-end gap-3 mt-2 md:mt-0">
          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 flex items-center gap-2 hover:bg-gray-50">
              <XCircle size={16} /> Refuser
            </button>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0b76ff] to-[#12b886] text-white flex items-center gap-2 shadow-md hover:opacity-95">
              <CheckCircle size={16} /> Accepter
            </button>
          </div>

          <div className="flex gap-3 mt-2">
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 flex items-center gap-2">
              <Phone size={16} /> Appeler
            </button>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0b76ff] to-[#12b886] text-white flex items-center gap-2">
              <MessageSquare size={16} /> Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Agenda({ view, setView }){
  return (
    <div className="bg-white rounded-2xl-lg shadow-soft p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Agenda</h3>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gray-100 p-1 flex items-center gap-1">
            <button
              onClick={() => setView("jour")}
              className={`px-3 py-1 rounded-full text-sm ${view === "jour" ? "bg-gradient-to-r from-[#0b76ff] to-[#12b886] text-white" : "text-gray-600"}`}
            >
              Jour
            </button>
            <button
              onClick={() => setView("semaine")}
              className={`px-3 py-1 rounded-full text-sm ${view === "semaine" ? "bg-gradient-to-r from-[#0b76ff] to-[#12b886] text-white" : "text-gray-600"}`}
            >
              Semaine
            </button>
            <button
              onClick={() => setView("mois")}
              className={`px-3 py-1 rounded-full text-sm ${view === "mois" ? "bg-gradient-to-r from-[#0b76ff] to-[#12b886] text-white" : "text-gray-600"}`}
            >
              Mois
            </button>
          </div>
        </div>
      </div>

      {/* content */}
      {view === "jour" && (
        <div>
          {agendaData.jour.map((ev, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl mb-3 border">
              <div>
                <div className="text-sm text-gray-500">{ev.heure}</div>
                <div className="font-medium">{ev.titre}</div>
                <div className="text-xs text-gray-400">{ev.client}</div>
              </div>
              <div className="text-sm text-gray-600">Détails</div>
            </div>
          ))}
        </div>
      )}

      {view === "semaine" && (
        <div className="grid grid-cols-7 gap-4">
          {agendaData.semaine.map((d, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${d.events.length ? "bg-blue-50 border-blue-200" : "bg-white"}`}>
              <div className="text-sm text-gray-500">{d.jour}</div>
              <div className="text-lg font-semibold mt-2">{d.date}</div>

              {d.events.length > 0 && (
                <div className="mt-3">
                  {d.events.map((e, j) => (
                    <div key={j} className="bg-white rounded-md p-2 mt-2 text-xs shadow-sm">
                      <div className="font-semibold text-blue-600">{e.heure}</div>
                      <div className="truncate">{e.titre}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {view === "mois" && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {agendaData.mois.map((m, i) => (
            <div key={i} className="p-3 rounded-xl border bg-gradient-to-r from-[#f0fbff] to-[#f7fff4]">
              <div className="text-sm font-semibold text-gray-700">{m.jour}</div>
              <div className="text-sm text-blue-600 mt-2">{m.titre}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DashboardArtisan(){
  // state: view can be 'demandes' | 'jour' | 'semaine' | 'mois'
  const [section, setSection] = useState("demandes"); // default open demandes
  const [agendaView, setAgendaView] = useState("semaine");

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <HeaderCards />

      {/* Toggle nav (Demandes / Agenda) */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex rounded-full bg-white shadow-soft overflow-hidden">
          <button
            onClick={() => setSection("demandes")}
            className={`px-6 py-3 text-sm font-medium ${section === "demandes" ? "bg-gradient-to-r from-[#0b76ff] to-[#12b886] text-white" : "text-gray-600"}`}
          >
            Demandes (2)
          </button>
          <button
            onClick={() => setSection("agenda")}
            className={`px-6 py-3 text-sm font-medium ${section === "agenda" ? "bg-gradient-to-r from-[#0b76ff] to-[#12b886] text-white" : "text-gray-600"}`}
          >
            Agenda (3)
          </button>
        </div>

        <div className="text-sm text-gray-500">Dernière mise à jour • 16 oct 2025</div>
      </div>

      {/* Section — Demandes */}
      {section === "demandes" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Nouvelles demandes</h2>
          <div>
            {demandesData.map(d => <DemandCard key={d.id} d={d} />)}
          </div>
        </div>
      )}

      {/* Section — Agenda */}
      {section === "agenda" && (
        <div className="space-y-6">
          <Agenda view={agendaView} setView={setAgendaView} />
          <div>
            <h4 className="text-lg font-medium mb-4">Prochaines prestations</h4>
            <div className="bg-white rounded-2xl-lg shadow-soft p-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex gap-4 items-start">
                  <div className="pastille bg-gradient-to-br from-[#12B886] to-[#0b76ff]">YD</div>
                  <div>
                    <div className="font-semibold text-lg">Construction garage</div>
                    <div className="text-sm text-gray-500">Youssouf Diallo</div>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 bg-gradient-to-r from-[#f0fbff] to-[#f7fff4] p-3 rounded-xl text-sm text-gray-600">
                      <div className="flex items-center gap-2"><IconCalendar size={16} /> 16/10/2025</div>
                      <div className="flex items-center gap-2"><IconClock size={16} /> 09:00</div>
                      <div className="flex items-center gap-2"><MapPin size={16} /> Bamako, Kalaban-Coura</div>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold"><TrendingUp size={16} /> 520000 FCFA</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-2 md:mt-0">
                  <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 flex items-center gap-2">
                    <Phone size={16} /> Appeler
                  </button>
                  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#0b76ff] to-[#12b886] text-white flex items-center gap-2">
                    <MessageSquare size={16} /> Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Small footer spacing */}
      <div className="h-12"></div>
    </div>
  );
}
