"use client";

import { useState } from "react";
import TextReveal from "@/components/TextReveal";
import { 
  useContent, 
  AcademicYear,
  EventItem, 
  TeamMember, 
  StaffMember, 
  ResourceItem, 
  TopperItem, 
  HomeConfig 
} from "@/context/content-context";
import { uploadMediaFile, generateUUID } from "@/lib/supabase";
import { 
  Plus, 
  Trash2, 
  Edit3, 
  X, 
  Save 
} from "lucide-react";
import { toast } from "sonner";

export default function AdminDashboardPage() {
  const {
    events, team, staff, resources, toppers, homeConfig, loading,
    saveEvent, deleteEvent, saveTeamMember, deleteTeamMember,
    saveStaffMember, deleteStaffMember, saveResource, deleteResource,
    saveTopper, deleteTopper, updateHomeConfig
  } = useContent();

  const [activeTab, setActiveTab] = useState<"overview" | "events" | "team" | "staff" | "resources" | "academics">("overview");
  const [uploading, setUploading] = useState(false);

  // Home Config Local Form
  const [localHomeConfig, setLocalHomeConfig] = useState<HomeConfig>(homeConfig);

  // Modals state
  const [eventModal, setEventModal] = useState<Partial<EventItem> | null>(null);
  const [teamModal, setTeamModal] = useState<Partial<TeamMember> | null>(null);
  const [staffModal, setStaffModal] = useState<Partial<StaffMember> | null>(null);
  const [resourceModal, setResourceModal] = useState<Partial<ResourceItem> | null>(null);
  const [topperModal, setTopperModal] = useState<Partial<TopperItem> | null>(null);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#02040a] text-white flex items-center justify-center font-mono text-xs">
        <div className="w-5 h-5 border-2 border-[#0e76ff] border-t-transparent rounded-full animate-spin mr-3" />
        LOADING SHAIDS SYSTEM DATA...
      </div>
    );
  }

  const handleFileUpload = async (file: File, onSuccess: (url: string) => void) => {
    setUploading(true);
    try {
      const url = await uploadMediaFile(file);
      onSuccess(url);
      toast.success("File uploaded to Supabase Storage!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "File upload failed";
      toast.error(msg);
    } finally {
      setUploading(false);
    }
  };

  // --- SAVE HANDLERS ---
  const handleSaveHomeConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateHomeConfig(localHomeConfig);
    toast.success("Homepage config updated successfully!");
  };

  const handleSaveEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventModal?.title || !eventModal?.date || !eventModal?.location) {
      toast.error("Title, Date, and Location are required!");
      return;
    }
    const item: EventItem = {
      id: eventModal.id || generateUUID(),
      title: eventModal.title,
      description: eventModal.description || "",
      date: eventModal.date,
      location: eventModal.location,
      type: eventModal.type || "Technical Event",
      category: eventModal.category || "Technical Event",
      registration_url: eventModal.registration_url || "",
      has_registration: Boolean(eventModal.has_registration),
      is_past: Boolean(eventModal.is_past),
      academicYear: (eventModal.academicYear || "2026-27") as AcademicYear
    };
    await saveEvent(item);
    setEventModal(null);
  };

  const handleSaveTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamModal?.name || !teamModal?.role) {
      toast.error("Name and Role are required!");
      return;
    }
    const member: TeamMember = {
      id: teamModal.id || generateUUID(),
      name: teamModal.name,
      role: teamModal.role,
      category: teamModal.category || "Core Committee",
      image_url: teamModal.image_url || "",
      github: teamModal.github || "",
      linkedin: teamModal.linkedin || "",
      instagram: teamModal.instagram || "",
      email: teamModal.email || "",
      bio: teamModal.bio || "",
      academicYear: (teamModal.academicYear || "2026-27") as AcademicYear
    };
    await saveTeamMember(member);
    setTeamModal(null);
  };

  const handleSaveStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffModal?.name || !staffModal?.designation) {
      toast.error("Name and Designation are required!");
      return;
    }
    const member: StaffMember = {
      id: staffModal.id || generateUUID(),
      name: staffModal.name,
      designation: staffModal.designation,
      qualification: staffModal.qualification || "",
      email: staffModal.email || "",
      image_url: staffModal.image_url || "",
      bio: staffModal.bio || ""
    };
    await saveStaffMember(member);
    setStaffModal(null);
  };

  const handleSaveResource = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resourceModal?.title || !resourceModal?.link) {
      toast.error("Title and Resource Link are required!");
      return;
    }
    const res: ResourceItem = {
      id: resourceModal.id || generateUUID(),
      title: resourceModal.title,
      description: resourceModal.description || "",
      category: resourceModal.category || "Notes",
      link: resourceModal.link,
      author: resourceModal.author || "SHAIDS Team"
    };
    await saveResource(res);
    setResourceModal(null);
  };

  const handleSaveTopper = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topperModal?.name || !topperModal?.sgpa) {
      toast.error("Name and SGPA are required!");
      return;
    }
    const topper: TopperItem = {
      id: topperModal.id || generateUUID(),
      semType: topperModal.semType || "Even",
      yearBatch: topperModal.yearBatch || "SE",
      rank: topperModal.rank || "Rank 1",
      name: topperModal.name,
      sgpa: topperModal.sgpa
    };
    await saveTopper(topper);
    setTopperModal(null);
  };

  return (
    <div className="w-full min-h-screen bg-[#02040a] text-white pt-32 pb-24 px-4 md:px-8" data-theme="dark">
      <div className="layout-block max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-12 border-b border-[#262626] pb-10">
          <div className="mono-small text-[#0e76ff] font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0e76ff] animate-ping" />
            SHAIDS SYSTEM CONTROL CENTER
          </div>
          <TextReveal
            text="Institutional Admin Portal"
            as="h1"
            className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-6 font-sans"
          />
          <p className="body-large text-[#a3a3a3] max-w-3xl font-medium leading-relaxed">
            Manage live events, student committee rosters, faculty directory, academic resources, and toppers with direct Supabase database synchronization.
          </p>

          {/* Navigation Sub-Tabs */}
          <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-white/10 font-mono text-xs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 border transition-colors ${activeTab === "overview" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              OVERVIEW & SHOWCASE
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-4 py-2 border transition-colors ${activeTab === "events" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              EVENTS ({events.length})
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-4 py-2 border transition-colors ${activeTab === "team" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              STUDENT COMMITTEE ({team.length})
            </button>
            <button
              onClick={() => setActiveTab("staff")}
              className={`px-4 py-2 border transition-colors ${activeTab === "staff" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              FACULTY ({staff.length})
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`px-4 py-2 border transition-colors ${activeTab === "resources" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              RESOURCES ({resources.length})
            </button>
            <button
              onClick={() => setActiveTab("academics")}
              className={`px-4 py-2 border transition-colors ${activeTab === "academics" ? "bg-[#0e76ff] border-[#0e76ff] text-white font-bold" : "bg-[#080d1a] border-[#262626] text-[#a3a3a3] hover:text-white"}`}
            >
              TOPPERS & AWARDS ({toppers.length})
            </button>
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card-frosted p-6 border border-white/10">
                <div className="mono-small text-[#a3a3a3] mb-1">TOTAL EVENTS</div>
                <div className="text-3xl font-bold font-sans text-white">{events.length}</div>
              </div>
              <div className="card-frosted p-6 border border-white/10">
                <div className="mono-small text-[#a3a3a3] mb-1">STUDENT COMMITTEE</div>
                <div className="text-3xl font-bold font-sans text-white">{team.length}</div>
              </div>
              <div className="card-frosted p-6 border border-white/10">
                <div className="mono-small text-[#a3a3a3] mb-1">FACULTY MEMBERS</div>
                <div className="text-3xl font-bold font-sans text-white">{staff.length}</div>
              </div>
              <div className="card-frosted p-6 border border-white/10">
                <div className="mono-small text-[#a3a3a3] mb-1">STUDENT RESOURCES</div>
                <div className="text-3xl font-bold font-sans text-white">{resources.length}</div>
              </div>
            </div>

            {/* Config Form */}
            <form onSubmit={handleSaveHomeConfig} className="card-frosted p-8 border border-white/10 space-y-6">
              <div className="flex justify-between items-center border-b border-[#262626] pb-4">
                <h3 className="text-2xl font-bold font-sans text-white">Landing Page Configuration</h3>
                <button type="submit" className="px-5 py-2.5 bg-[#0e76ff] text-white font-mono text-xs font-bold flex items-center gap-2 hover:bg-[#0e76ff]/80">
                  <Save className="w-4 h-4" /> SAVE CONFIG
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                <div>
                  <label className="block text-[#a3a3a3] mb-2">HERO HEADLINE</label>
                  <input
                    type="text"
                    value={localHomeConfig.hero_headline || ""}
                    onChange={(e) => setLocalHomeConfig({ ...localHomeConfig, hero_headline: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#262626] text-white px-4 py-2.5"
                  />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-2">HERO SUBTITLE</label>
                  <input
                    type="text"
                    value={localHomeConfig.hero_subtitle || ""}
                    onChange={(e) => setLocalHomeConfig({ ...localHomeConfig, hero_subtitle: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#262626] text-white px-4 py-2.5"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[#a3a3a3] mb-2">ANNOUNCEMENT BANNER TEXT</label>
                  <input
                    type="text"
                    value={localHomeConfig.announcement_text || ""}
                    onChange={(e) => setLocalHomeConfig({ ...localHomeConfig, announcement_text: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#262626] text-white px-4 py-2.5"
                  />
                </div>
              </div>
            </form>

          </div>
        )}

        {/* TAB 2: EVENTS */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="mono-small text-[#0e76ff] font-bold">MANAGE EVENTS</div>
              <button
                onClick={() => setEventModal({ category: "Technical Event", type: "Workshop", has_registration: true, academicYear: "2026-27" })}
                className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> ADD NEW EVENT
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((ev) => (
                <div key={ev.id} className="card-frosted p-6 border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-[#a3a3a3] mb-2">
                      <span>{ev.type || "Event"}</span>
                      <span>{ev.date}</span>
                    </div>
                    <h4 className="text-xl font-bold font-sans text-white mb-2">{ev.title}</h4>
                    <p className="text-xs text-[#a3a3a3] line-clamp-2">{ev.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                    <button onClick={() => setEventModal(ev)} className="text-[#0e76ff] font-bold flex items-center gap-1">
                      <Edit3 className="w-3.5 h-3.5" /> EDIT
                    </button>
                    <button onClick={() => deleteEvent(ev.id)} className="text-red-400 font-bold flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5" /> DELETE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TEAM */}
        {activeTab === "team" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="mono-small text-[#0e76ff] font-bold">MANAGE STUDENT COMMITTEE</div>
              <button
                onClick={() => setTeamModal({ category: "Core Committee", academicYear: "2026-27" })}
                className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> ADD COMMITTEE MEMBER
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((m) => (
                <div key={m.id} className="card-frosted p-6 border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="mono-small text-[#0e76ff] text-[10px] mb-1">{m.category}</div>
                    <h4 className="text-xl font-bold font-sans text-white">{m.name}</h4>
                    <div className="text-xs font-mono text-[#a3a3a3]">{m.role}</div>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                    <button onClick={() => setTeamModal(m)} className="text-[#0e76ff] font-bold flex items-center gap-1">
                      <Edit3 className="w-3.5 h-3.5" /> EDIT
                    </button>
                    <button onClick={() => deleteTeamMember(m.id)} className="text-red-400 font-bold flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5" /> DELETE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: STAFF */}
        {activeTab === "staff" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="mono-small text-[#0e76ff] font-bold">MANAGE FACULTY DIRECTORY</div>
              <button
                onClick={() => setStaffModal({ designation: "Assistant Professor" })}
                className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> ADD FACULTY MEMBER
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {staff.map((s) => (
                <div key={s.id} className="card-frosted p-6 border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-xl font-bold font-sans text-white">{s.name}</h4>
                    <div className="text-xs font-mono text-[#0e76ff]">{s.designation}</div>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                    <button onClick={() => setStaffModal(s)} className="text-[#0e76ff] font-bold flex items-center gap-1">
                      <Edit3 className="w-3.5 h-3.5" /> EDIT
                    </button>
                    <button onClick={() => deleteStaffMember(s.id)} className="text-red-400 font-bold flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5" /> DELETE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: RESOURCES */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="mono-small text-[#0e76ff] font-bold">MANAGE STUDENT RESOURCES</div>
              <button
                onClick={() => setResourceModal({ category: "Notes" })}
                className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> ADD RESOURCE LINK
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((r) => (
                <div key={r.id} className="card-frosted p-6 border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="mono-small text-[#0e76ff] text-[10px] mb-1">{r.category}</div>
                    <h4 className="text-xl font-bold font-sans text-white">{r.title}</h4>
                    <p className="text-xs text-[#a3a3a3] mt-1 line-clamp-2">{r.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                    <button onClick={() => setResourceModal(r)} className="text-[#0e76ff] font-bold flex items-center gap-1">
                      <Edit3 className="w-3.5 h-3.5" /> EDIT
                    </button>
                    <button onClick={() => deleteResource(r.id)} className="text-red-400 font-bold flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5" /> DELETE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: ACADEMICS */}
        {activeTab === "academics" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="mono-small text-[#0e76ff] font-bold">MANAGE ACADEMIC TOPPERS</div>
              <button
                onClick={() => setTopperModal({ rank: "Rank 1", yearBatch: "SE", semType: "Even" })}
                className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> ADD TOPPER RECORD
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {toppers.map((t) => (
                <div key={t.id} className="card-frosted p-6 border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="mono-small text-[#0e76ff] text-[10px] mb-1">{t.rank} • {t.yearBatch} ({t.semType} Sem)</div>
                    <h4 className="text-xl font-bold font-sans text-white">{t.name}</h4>
                    <div className="text-sm font-mono text-[#a3a3a3] mt-1">{t.sgpa} SGPA</div>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between font-mono text-xs">
                    <button onClick={() => setTopperModal(t)} className="text-[#0e76ff] font-bold flex items-center gap-1">
                      <Edit3 className="w-3.5 h-3.5" /> EDIT
                    </button>
                    <button onClick={() => deleteTopper(t.id)} className="text-red-400 font-bold flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5" /> DELETE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL FOR EVENT EDIT */}
        {eventModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form onSubmit={handleSaveEvent} className="bg-[#080d1a] border border-[#0e76ff]/40 p-8 max-w-xl w-full space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#262626] pb-4">
                <h3 className="text-xl font-bold font-sans text-white">{eventModal.id ? "Edit Event" : "Add Event"}</h3>
                <button type="button" onClick={() => setEventModal(null)}><X className="w-5 h-5 text-[#a3a3a3]" /></button>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#a3a3a3] mb-1">TITLE</label>
                  <input type="text" value={eventModal.title || ""} onChange={(e) => setEventModal({ ...eventModal, title: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">DATE</label>
                  <input type="text" value={eventModal.date || ""} onChange={(e) => setEventModal({ ...eventModal, date: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">LOCATION</label>
                  <input type="text" value={eventModal.location || ""} onChange={(e) => setEventModal({ ...eventModal, location: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">DESCRIPTION</label>
                  <textarea value={eventModal.description || ""} onChange={(e) => setEventModal({ ...eventModal, description: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2 h-20" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-[#262626]">
                <button type="button" onClick={() => setEventModal(null)} className="px-4 py-2 border border-[#262626] text-[#a3a3a3] font-mono text-xs">CANCEL</button>
                <button type="submit" className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold">SAVE EVENT</button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL FOR TEAM MEMBER EDIT */}
        {teamModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form onSubmit={handleSaveTeam} className="bg-[#080d1a] border border-[#0e76ff]/40 p-8 max-w-xl w-full space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#262626] pb-4">
                <h3 className="text-xl font-bold font-sans text-white">{teamModal.id ? "Edit Committee Member" : "Add Committee Member"}</h3>
                <button type="button" onClick={() => setTeamModal(null)}><X className="w-5 h-5 text-[#a3a3a3]" /></button>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#a3a3a3] mb-1">NAME</label>
                  <input type="text" value={teamModal.name || ""} onChange={(e) => setTeamModal({ ...teamModal, name: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">ROLE</label>
                  <input type="text" value={teamModal.role || ""} onChange={(e) => setTeamModal({ ...teamModal, role: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">CATEGORY</label>
                  <select value={teamModal.category || "Core Committee"} onChange={(e) => setTeamModal({ ...teamModal, category: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2">
                    <option value="Core Committee">Core Committee</option>
                    <option value="Tech Team">Tech Team</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">ACADEMIC YEAR</label>
                  <select value={teamModal.academicYear || "2026-27"} onChange={(e) => setTeamModal({ ...teamModal, academicYear: e.target.value as AcademicYear })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2">
                    <option value="2026-27">2026-27</option>
                    <option value="2025-26">2025-26</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">IMAGE URL</label>
                  <div className="flex gap-2">
                    <input type="text" value={teamModal.image_url || ""} onChange={(e) => setTeamModal({ ...teamModal, image_url: e.target.value })} className="flex-1 bg-[#02040a] border border-[#262626] text-white px-3 py-2" />
                    <label className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white cursor-pointer font-mono text-xs flex items-center">
                      {uploading ? "..." : "UPLOAD"}
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, (url) => setTeamModal({ ...teamModal, image_url: url }));
                      }} />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">EMAIL</label>
                  <input type="email" value={teamModal.email || ""} onChange={(e) => setTeamModal({ ...teamModal, email: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">BIO</label>
                  <textarea value={teamModal.bio || ""} onChange={(e) => setTeamModal({ ...teamModal, bio: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2 h-16" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-[#262626]">
                <button type="button" onClick={() => setTeamModal(null)} className="px-4 py-2 border border-[#262626] text-[#a3a3a3] font-mono text-xs">CANCEL</button>
                <button type="submit" className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold">SAVE MEMBER</button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL FOR STAFF MEMBER EDIT */}
        {staffModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form onSubmit={handleSaveStaff} className="bg-[#080d1a] border border-[#0e76ff]/40 p-8 max-w-xl w-full space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#262626] pb-4">
                <h3 className="text-xl font-bold font-sans text-white">{staffModal.id ? "Edit Faculty Member" : "Add Faculty Member"}</h3>
                <button type="button" onClick={() => setStaffModal(null)}><X className="w-5 h-5 text-[#a3a3a3]" /></button>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#a3a3a3] mb-1">NAME</label>
                  <input type="text" value={staffModal.name || ""} onChange={(e) => setStaffModal({ ...staffModal, name: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">DESIGNATION</label>
                  <input type="text" value={staffModal.designation || ""} onChange={(e) => setStaffModal({ ...staffModal, designation: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">QUALIFICATION</label>
                  <input type="text" value={staffModal.qualification || ""} onChange={(e) => setStaffModal({ ...staffModal, qualification: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">IMAGE URL</label>
                  <div className="flex gap-2">
                    <input type="text" value={staffModal.image_url || ""} onChange={(e) => setStaffModal({ ...staffModal, image_url: e.target.value })} className="flex-1 bg-[#02040a] border border-[#262626] text-white px-3 py-2" />
                    <label className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white cursor-pointer font-mono text-xs flex items-center">
                      {uploading ? "..." : "UPLOAD"}
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, (url) => setStaffModal({ ...staffModal, image_url: url }));
                      }} />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">EMAIL</label>
                  <input type="email" value={staffModal.email || ""} onChange={(e) => setStaffModal({ ...staffModal, email: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">BIO</label>
                  <textarea value={staffModal.bio || ""} onChange={(e) => setStaffModal({ ...staffModal, bio: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2 h-16" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-[#262626]">
                <button type="button" onClick={() => setStaffModal(null)} className="px-4 py-2 border border-[#262626] text-[#a3a3a3] font-mono text-xs">CANCEL</button>
                <button type="submit" className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold">SAVE FACULTY</button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL FOR RESOURCE EDIT */}
        {resourceModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form onSubmit={handleSaveResource} className="bg-[#080d1a] border border-[#0e76ff]/40 p-8 max-w-xl w-full space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#262626] pb-4">
                <h3 className="text-xl font-bold font-sans text-white">{resourceModal.id ? "Edit Resource" : "Add Resource"}</h3>
                <button type="button" onClick={() => setResourceModal(null)}><X className="w-5 h-5 text-[#a3a3a3]" /></button>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#a3a3a3] mb-1">TITLE</label>
                  <input type="text" value={resourceModal.title || ""} onChange={(e) => setResourceModal({ ...resourceModal, title: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">LINK</label>
                  <input type="text" value={resourceModal.link || ""} onChange={(e) => setResourceModal({ ...resourceModal, link: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">CATEGORY</label>
                  <select value={resourceModal.category || "Notes"} onChange={(e) => setResourceModal({ ...resourceModal, category: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2">
                    <option value="Notes">Notes</option>
                    <option value="Syllabus">Syllabus</option>
                    <option value="Lab Manuals">Lab Manuals</option>
                    <option value="Question Papers">Question Papers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">AUTHOR / CONTRIBUTOR</label>
                  <input type="text" value={resourceModal.author || ""} onChange={(e) => setResourceModal({ ...resourceModal, author: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">DESCRIPTION</label>
                  <textarea value={resourceModal.description || ""} onChange={(e) => setResourceModal({ ...resourceModal, description: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2 h-16" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-[#262626]">
                <button type="button" onClick={() => setResourceModal(null)} className="px-4 py-2 border border-[#262626] text-[#a3a3a3] font-mono text-xs">CANCEL</button>
                <button type="submit" className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold">SAVE RESOURCE</button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL FOR TOPPER EDIT */}
        {topperModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form onSubmit={handleSaveTopper} className="bg-[#080d1a] border border-[#0e76ff]/40 p-8 max-w-xl w-full space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#262626] pb-4">
                <h3 className="text-xl font-bold font-sans text-white">{topperModal.id ? "Edit Topper Record" : "Add Topper Record"}</h3>
                <button type="button" onClick={() => setTopperModal(null)}><X className="w-5 h-5 text-[#a3a3a3]" /></button>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#a3a3a3] mb-1">STUDENT NAME</label>
                  <input type="text" value={topperModal.name || ""} onChange={(e) => setTopperModal({ ...topperModal, name: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">SGPA</label>
                  <input type="text" value={topperModal.sgpa || ""} onChange={(e) => setTopperModal({ ...topperModal, sgpa: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">RANK</label>
                  <select value={topperModal.rank || "Rank 1"} onChange={(e) => setTopperModal({ ...topperModal, rank: e.target.value })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2">
                    <option value="Rank 1">Rank 1</option>
                    <option value="Rank 2">Rank 2</option>
                    <option value="Rank 3">Rank 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">YEAR / BATCH</label>
                  <select value={topperModal.yearBatch || "SE"} onChange={(e) => setTopperModal({ ...topperModal, yearBatch: e.target.value as "SE" | "TE" | "BE" })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2">
                    <option value="SE">SE</option>
                    <option value="TE">TE</option>
                    <option value="BE">BE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#a3a3a3] mb-1">SEMESTER TYPE</label>
                  <select value={topperModal.semType || "Even"} onChange={(e) => setTopperModal({ ...topperModal, semType: e.target.value as "Odd" | "Even" })} className="w-full bg-[#02040a] border border-[#262626] text-white px-3 py-2">
                    <option value="Odd">Odd Semester</option>
                    <option value="Even">Even Semester</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-[#262626]">
                <button type="button" onClick={() => setTopperModal(null)} className="px-4 py-2 border border-[#262626] text-[#a3a3a3] font-mono text-xs">CANCEL</button>
                <button type="submit" className="px-4 py-2 bg-[#0e76ff] text-white font-mono text-xs font-bold">SAVE TOPPER</button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
