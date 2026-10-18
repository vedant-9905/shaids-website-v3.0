'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import type { RealtimeChannel } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured, isValidUUID, generateUUID } from '@/lib/supabase';
import { toast } from 'sonner';

export type AcademicYear = '2026-27' | '2025-26';

export interface EventItem {
    id: string;
    title: string;
    description: string;
    long_description?: string;
    date: string;
    end_date?: string;
    time?: string;
    location: string;
    image_url?: string;
    type?: string;
    category?: string;
    organizer?: string;
    brochure_url?: string;
    registration_url?: string;
    has_registration: boolean;
    is_past: boolean;
    academicYear?: AcademicYear;
    gallery_images?: string[];
}

export function isEventCompleted(event: EventItem): boolean {
    if (event.is_past) return true;
    if (!event.date) return false;

    try {
        const dateToCheck = event.end_date || event.date;
        const targetDate = new Date(dateToCheck + 'T23:59:59').getTime();
        const now = new Date().getTime();
        return now > targetDate;
    } catch {
        return false;
    }
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    category?: string;
    image_url?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
    bio?: string;
    graduation_year?: string;
    academicYear?: AcademicYear;
    skills?: string[];
    achievements?: string[];
    display_order?: number;
    created_at?: string;
}

export interface StaffMember {
    id: string;
    name: string;
    designation: string;
    department?: string;
    qualification?: string;
    expertise?: string[];
    email?: string;
    image_url?: string;
    bio?: string;
    display_order?: number;
    created_at?: string;
}

export interface ResourceItem {
    id: string;
    title: string;
    description: string;
    category: string;
    link: string;
    tags?: string[];
    author?: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    abstract: string;
    team: string[];
    advisor: string;
    techStack: string[];
    image: string;
    gallery: string[];
    academicYear?: AcademicYear;
    github?: string;
    demo?: string;
}

export interface NptelItem {
    id: string;
    name: string;
    course: string;
    cert: string;
    score: string;
    year: string;
    academicYear?: AcademicYear;
    isFaculty?: boolean;
}

export interface HighlightItem {
    id: string;
    title: string;
    category: string;
    team: string;
    location: string;
    date: string;
    description: string;
    achievement?: string;
    image: string;
    gallery: string[];
    academicYear?: AcademicYear;
}

export interface FestSubEvent {
    id: string;
    festId: 'vectors' | 'kurukshetra' | 'rhythms';
    title: string;
    organizer: string;
    winner: string;
    runnerUp: string;
    desc: string;
    detailedInfo: string;
    image: string;
    academicYear?: AcademicYear;
    eventGallery: string[];
}

export interface TopperItem {
    id: string;
    semType: 'Odd' | 'Even';
    yearBatch: 'SE' | 'TE' | 'BE';
    rank: string;
    name: string;
    sgpa: string;
}

export interface DomainAwardItem {
    id: string;
    title: string;
    recipient: string;
    domain: string;
}

export interface HomeConfig {
    hero_headline: string;
    hero_subtitle: string;
    announcement_text: string;
    about_text: string;
    stat_members: string;
    stat_events: string;
    stat_workshops: string;
    image_events?: string;
    image_team?: string;
    image_resources?: string;
    image_staff?: string;
}

export interface FestGalleries {
    vectors: string[];
    kurukshetra: string[];
    rhythms: string[];
}

const DEFAULT_FEST_GALLERIES: FestGalleries = {
    vectors: [],
    kurukshetra: [],
    rhythms: []
};

const DEFAULT_HOME_CONFIG: HomeConfig = {
    hero_headline: 'Innovating Intelligence',
    hero_subtitle: 'The official student community of Department of Artificial Intelligence & Data Science at ACPCE. We are the bridge between academic theory and the cutting-edge reality of AI & Data Science.',
    announcement_text: '🚀 VECTORS 2026 National AI Hackathon Announced!',
    about_text: 'SHAIDS (Student Hub for Artificial Intelligence & Data Science) is dedicated to fostering innovation, technical growth, and collaborative learning across all batches.',
    stat_members: '480+',
    stat_events: '24+',
    stat_workshops: '16+',
    image_events: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    image_team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    image_resources: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
    image_staff: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80'
};

interface ContentContextType {
    events: EventItem[];
    team: TeamMember[];
    staff: StaffMember[];
    resources: ResourceItem[];
    projects: ProjectItem[];
    nptel: NptelItem[];
    highlights: HighlightItem[];
    festSubEvents: FestSubEvent[];
    festGalleries: FestGalleries;
    toppers: TopperItem[];
    domainAwards: DomainAwardItem[];
    homeConfig: HomeConfig;
    loading: boolean;
    academicYear: AcademicYear;
    setAcademicYear: (ay: AcademicYear) => void;
    saveEvent: (event: EventItem) => Promise<void>;
    deleteEvent: (id: string) => Promise<void>;
    saveTeamMember: (member: TeamMember) => Promise<void>;
    deleteTeamMember: (id: string) => Promise<void>;
    reorderTeamMembers: (members: TeamMember[]) => Promise<void>;
    saveStaffMember: (member: StaffMember) => Promise<void>;
    deleteStaffMember: (id: string) => Promise<void>;
    reorderStaffMembers: (members: StaffMember[]) => Promise<void>;
    saveResource: (resource: ResourceItem) => Promise<void>;
    deleteResource: (id: string) => Promise<void>;
    saveProject: (project: ProjectItem) => Promise<void>;
    deleteProject: (id: string) => Promise<void>;
    saveNptel: (nptel: NptelItem) => Promise<void>;
    deleteNptel: (id: string) => Promise<void>;
    saveHighlight: (highlight: HighlightItem) => Promise<void>;
    deleteHighlight: (id: string) => Promise<void>;
    saveFestSubEvent: (subEvent: FestSubEvent) => Promise<void>;
    deleteFestSubEvent: (id: string) => Promise<void>;
    saveFestGallery: (festId: 'vectors' | 'kurukshetra' | 'rhythms', gallery: string[]) => Promise<void>;
    saveTopper: (topper: TopperItem) => Promise<void>;
    deleteTopper: (id: string) => Promise<void>;
    saveDomainAward: (award: DomainAwardItem) => Promise<void>;
    deleteDomainAward: (id: string) => Promise<void>;
    updateHomeConfig: (config: HomeConfig) => Promise<void>;
}

const ContentContext = createContext<ContentContextType | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
    const [academicYear, setAcademicYear] = useState<AcademicYear>('2026-27');
    const [events, setEvents] = useState<EventItem[]>([]);
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [staff, setStaff] = useState<StaffMember[]>([]);
    const [resources, setResources] = useState<ResourceItem[]>([]);
    const [projects, setProjects] = useState<ProjectItem[]>([]);
    const [nptel, setNptel] = useState<NptelItem[]>([]);
    const [highlights, setHighlights] = useState<HighlightItem[]>([]);
    const [festSubEvents, setFestSubEvents] = useState<FestSubEvent[]>([]);
    const [festGalleries, setFestGalleries] = useState<FestGalleries>(DEFAULT_FEST_GALLERIES);
    const [toppers, setToppers] = useState<TopperItem[]>([]);
    const [domainAwards, setDomainAwards] = useState<DomainAwardItem[]>([]);
    const [homeConfig, setHomeConfig] = useState<HomeConfig>(DEFAULT_HOME_CONFIG);
    const [loading, setLoading] = useState(true);

    const refreshContent = useCallback(async () => {
        if (!isSupabaseConfigured || !supabase) return;
        try {
            const [evRes, tmRes, stRes, rsRes, prRes, npRes, hlRes, fsRes, fgRes, tpRes, daRes, hcRes] = await Promise.all([
                supabase.from('events').select('*'),
                supabase.from('team').select('*'),
                supabase.from('staff').select('*'),
                supabase.from('resources').select('*'),
                supabase.from('projects').select('*'),
                supabase.from('nptel').select('*'),
                supabase.from('highlights').select('*'),
                supabase.from('fest_sub_events').select('*'),
                supabase.from('fest_galleries').select('*'),
                supabase.from('toppers').select('*'),
                supabase.from('domain_awards').select('*'),
                supabase.from('home_config').select('*').single()
            ]);

            if (evRes.data) {
                setEvents(evRes.data.map((r: Record<string, unknown>) => ({ ...r, academicYear: r.academic_year || '2026-27' } as unknown as EventItem)));
            }
            if (tmRes.data) {
                const mapped = tmRes.data.map((r: Record<string, unknown>) => ({ ...r, academicYear: r.academic_year || '2026-27' } as unknown as TeamMember));
                mapped.sort((a, b) => {
                    const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
                    const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
                    return timeA - timeB;
                });
                setTeam(mapped);
            }
            if (stRes.data) {
                const mapped = stRes.data.map((r: Record<string, unknown>) => (r as unknown as StaffMember));
                mapped.sort((a, b) => {
                    const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
                    const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
                    return timeA - timeB;
                });
                setStaff(mapped);
            }
            if (rsRes.data) {
                setResources(rsRes.data);
            }
            if (prRes.data) {
                setProjects(prRes.data.map((r: Record<string, unknown>) => ({ ...r, academicYear: r.academic_year || '2026-27', techStack: r.tech_stack } as unknown as ProjectItem)));
            }
            if (npRes.data) {
                setNptel(npRes.data.map((r: Record<string, unknown>) => ({ ...r, academicYear: r.academic_year || '2026-27', isFaculty: r.is_faculty } as unknown as NptelItem)));
            }
            if (hlRes.data) {
                setHighlights(hlRes.data.map((r: Record<string, unknown>) => ({ ...r, academicYear: r.academic_year || '2026-27' } as unknown as HighlightItem)));
            }
            if (fsRes.data) {
                setFestSubEvents(fsRes.data.map((r: Record<string, unknown>) => ({
                    ...r,
                    festId: r.fest_id,
                    runnerUp: r.runner_up,
                    desc: r.desc_text || r.desc,
                    detailedInfo: r.detailed_info,
                    academicYear: r.academic_year || '2026-27',
                    eventGallery: r.event_gallery
                } as unknown as FestSubEvent)));
            }
            if (fgRes.data) {
                const map: Record<string, string[]> = {};
                fgRes.data.forEach((row: { id: string; gallery: string[] }) => { map[row.id] = row.gallery; });
                setFestGalleries(prev => ({ ...prev, ...map }));
            }
            if (tpRes.data) {
                setToppers(tpRes.data.map((r: Record<string, unknown>) => ({ ...r, semType: r.sem_type, yearBatch: r.year_batch } as unknown as TopperItem)));
            }
            if (daRes.data) {
                setDomainAwards(daRes.data);
            }
            if (hcRes.data) {
                setHomeConfig(hcRes.data);
            }
        } catch (err: unknown) {
            console.error('Supabase Live Refresh Error:', err);
        }
    }, []);

    const broadcastSync = () => {
        if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
            try {
                const bc = new BroadcastChannel('shaids-live-sync');
                bc.postMessage('SYNC_REFRESH');
                bc.close();
            } catch {}
        }
    };

    useEffect(() => {
        async function loadContent() {
            if (!isSupabaseConfigured || !supabase) {
                setLoading(false);
                return;
            }
            await refreshContent();
            setLoading(false);
        }

        loadContent();

        let bc: BroadcastChannel | null = null;
        if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
            bc = new BroadcastChannel('shaids-live-sync');
            bc.onmessage = (event) => {
                if (event.data === 'SYNC_REFRESH') {
                    refreshContent();
                }
            };
        }

        let channel: RealtimeChannel | null = null;
        if (isSupabaseConfigured && supabase) {
            const client = supabase;
            channel = client
                .channel('schema-db-changes')
                .on('postgres_changes', { event: '*', schema: 'public' }, () => {
                    refreshContent();
                })
                .subscribe();
        }

        let lastRefresh = Date.now();
        const handleFocus = () => {
            if (Date.now() - lastRefresh > 60000) {
                lastRefresh = Date.now();
                refreshContent();
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('focus', handleFocus);
        }

        return () => {
            if (bc) bc.close();
            if (channel && supabase) supabase.removeChannel(channel);
            if (typeof window !== 'undefined') {
                window.removeEventListener('focus', handleFocus);
            }
        };
    }, [refreshContent]);

    // --- SAVE / DELETE METHODS ---
    const saveEvent = async (event: EventItem) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = events.find(e => e.id === event.id);
            const validId = event.id && isValidUUID(event.id) ? event.id : (existing ? existing.id : generateUUID());
            const eventToSave: EventItem = { ...event, id: validId };
            const payload = {
                id: eventToSave.id,
                title: eventToSave.title,
                description: eventToSave.description,
                long_description: eventToSave.long_description || null,
                date: eventToSave.date,
                end_date: eventToSave.end_date || null,
                time: eventToSave.time || null,
                location: eventToSave.location,
                image_url: eventToSave.image_url || null,
                type: eventToSave.type || null,
                category: eventToSave.category || null,
                organizer: eventToSave.organizer || null,
                brochure_url: eventToSave.brochure_url || null,
                registration_url: eventToSave.registration_url || null,
                has_registration: Boolean(eventToSave.has_registration),
                is_past: Boolean(eventToSave.is_past),
                gallery_images: eventToSave.gallery_images || [],
                academic_year: eventToSave.academicYear || '2026-27'
            };
            const { error } = await supabase.from('events').upsert(payload).select();
            if (error) {
                toast.error(`Error saving event: ${error.message}`);
                return;
            }
            toast.success('Event saved successfully!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteEvent = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('events').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting event: ${error.message}`);
                return;
            }
            toast.success('Event deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const saveTeamMember = async (member: TeamMember) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = team.find(m => m.id === member.id);
            const validId = member.id && isValidUUID(member.id) ? member.id : (existing ? existing.id : generateUUID());
            const memberToSave: TeamMember = { ...member, id: validId };
            const payload = {
                id: memberToSave.id,
                name: memberToSave.name,
                role: memberToSave.role,
                category: memberToSave.category || 'Core Committee',
                image_url: memberToSave.image_url || null,
                github: memberToSave.github || null,
                linkedin: memberToSave.linkedin || null,
                instagram: memberToSave.instagram || null,
                email: memberToSave.email || null,
                bio: memberToSave.bio || null,
                graduation_year: memberToSave.graduation_year || null,
                skills: memberToSave.skills || [],
                achievements: memberToSave.achievements || [],
                academic_year: memberToSave.academicYear || '2026-27'
            };
            const { error } = await supabase.from('team').upsert(payload);
            if (error) {
                toast.error(`Error saving team member: ${error.message}`);
                return;
            }
            toast.success('Team member saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteTeamMember = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('team').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting team member: ${error.message}`);
                return;
            }
            toast.success('Team member deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const reorderTeamMembers = async (reordered: TeamMember[]) => {
        try {
            const baseTime = Date.now() - (reordered.length * 10000);
            const updated = reordered.map((m, idx) => ({
                ...m,
                display_order: idx + 1,
                created_at: new Date(baseTime + idx * 1000).toISOString()
            }));
            setTeam(updated);
            if (isSupabaseConfigured && supabase) {
                const upsertData = updated.map(m => ({
                    id: m.id,
                    name: m.name,
                    role: m.role,
                    category: m.category || 'Core Committee',
                    image_url: m.image_url || null,
                    github: m.github || null,
                    linkedin: m.linkedin || null,
                    instagram: m.instagram || null,
                    email: m.email || null,
                    bio: m.bio || null,
                    graduation_year: m.graduation_year || null,
                    skills: m.skills || [],
                    achievements: m.achievements || [],
                    academic_year: m.academicYear || '2026-27',
                    created_at: m.created_at
                }));
                await supabase.from('team').upsert(upsertData);
                await refreshContent();
                broadcastSync();
            }
        } catch (err) {
            console.error('Reorder error:', err);
        }
    };

    const saveStaffMember = async (member: StaffMember) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = staff.find(m => m.id === member.id);
            const validId = member.id && isValidUUID(member.id) ? member.id : (existing ? existing.id : generateUUID());
            const payload = {
                id: validId,
                name: member.name,
                designation: member.designation,
                department: member.department || 'Artificial Intelligence & Data Science',
                qualification: member.qualification || null,
                expertise: member.expertise || [],
                email: member.email || null,
                image_url: member.image_url || null,
                bio: member.bio || null
            };
            const { error } = await supabase.from('staff').upsert(payload);
            if (error) {
                toast.error(`Error saving staff: ${error.message}`);
                return;
            }
            toast.success('Faculty saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteStaffMember = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('staff').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting faculty: ${error.message}`);
                return;
            }
            toast.success('Faculty deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const reorderStaffMembers = async (reordered: StaffMember[]) => {
        try {
            const baseTime = Date.now() - (reordered.length * 10000);
            const updated = reordered.map((m, idx) => ({
                ...m,
                display_order: idx + 1,
                created_at: new Date(baseTime + idx * 1000).toISOString()
            }));
            setStaff(updated);
            if (isSupabaseConfigured && supabase) {
                const upsertData = updated.map(m => ({
                    id: m.id,
                    name: m.name,
                    designation: m.designation,
                    department: m.department || 'Artificial Intelligence & Data Science',
                    qualification: m.qualification || null,
                    expertise: m.expertise || [],
                    email: m.email || null,
                    image_url: m.image_url || null,
                    bio: m.bio || null,
                    created_at: m.created_at
                }));
                await supabase.from('staff').upsert(upsertData);
                await refreshContent();
                broadcastSync();
            }
        } catch (err) {
            console.error('Reorder error:', err);
        }
    };

    const saveResource = async (resource: ResourceItem) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = resources.find(r => r.id === resource.id);
            const validId = resource.id && isValidUUID(resource.id) ? resource.id : (existing ? existing.id : generateUUID());
            const payload = {
                id: validId,
                title: resource.title,
                description: resource.description || '',
                category: resource.category,
                link: resource.link,
                tags: resource.tags || [],
                author: resource.author || null
            };
            const { error } = await supabase.from('resources').upsert(payload);
            if (error) {
                toast.error(`Error saving resource: ${error.message}`);
                return;
            }
            toast.success('Resource saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteResource = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('resources').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting resource: ${error.message}`);
                return;
            }
            toast.success('Resource deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const saveProject = async (project: ProjectItem) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = projects.find(p => p.id === project.id);
            const validId = project.id && isValidUUID(project.id) ? project.id : (existing ? existing.id : generateUUID());
            const payload = {
                id: validId,
                title: project.title,
                category: project.category || null,
                abstract: project.abstract || null,
                team: project.team || [],
                advisor: project.advisor || null,
                tech_stack: project.techStack || [],
                image: project.image || null,
                gallery: project.gallery || [],
                github: project.github || null,
                demo: project.demo || null,
                academic_year: project.academicYear || '2026-27'
            };
            const { error } = await supabase.from('projects').upsert(payload);
            if (error) {
                toast.error(`Error saving project: ${error.message}`);
                return;
            }
            toast.success('Project saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteProject = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('projects').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting project: ${error.message}`);
                return;
            }
            toast.success('Project deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const saveNptel = async (item: NptelItem) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = nptel.find(n => n.id === item.id);
            const validId = item.id && isValidUUID(item.id) ? item.id : (existing ? existing.id : generateUUID());
            const payload = {
                id: validId,
                name: item.name,
                course: item.course,
                cert: item.cert || null,
                score: item.score || null,
                year: item.year || null,
                is_faculty: Boolean(item.isFaculty),
                academic_year: item.academicYear || '2026-27'
            };
            const { error } = await supabase.from('nptel').upsert(payload);
            if (error) {
                toast.error(`Error saving NPTEL record: ${error.message}`);
                return;
            }
            toast.success('NPTEL record saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteNptel = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('nptel').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting NPTEL record: ${error.message}`);
                return;
            }
            toast.success('NPTEL record deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const saveHighlight = async (item: HighlightItem) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = highlights.find(h => h.id === item.id);
            const validId = item.id && isValidUUID(item.id) ? item.id : (existing ? existing.id : generateUUID());
            const payload = {
                id: validId,
                title: item.title,
                category: item.category || null,
                team: item.team || null,
                location: item.location || null,
                date: item.date || null,
                description: item.description || '',
                achievement: item.achievement || null,
                image: item.image || null,
                gallery: item.gallery || [],
                academic_year: item.academicYear || '2026-27'
            };
            const { error } = await supabase.from('highlights').upsert(payload);
            if (error) {
                toast.error(`Error saving highlight: ${error.message}`);
                return;
            }
            toast.success('Highlight saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteHighlight = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('highlights').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting highlight: ${error.message}`);
                return;
            }
            toast.success('Highlight deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const saveFestSubEvent = async (subEvent: FestSubEvent) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = festSubEvents.find(f => f.id === subEvent.id);
            const validId = subEvent.id && isValidUUID(subEvent.id) ? subEvent.id : (existing ? existing.id : generateUUID());
            const payload = {
                id: validId,
                fest_id: subEvent.festId,
                title: subEvent.title,
                organizer: subEvent.organizer || null,
                winner: subEvent.winner || null,
                runner_up: subEvent.runnerUp || null,
                desc_text: subEvent.desc || '',
                detailed_info: subEvent.detailedInfo || null,
                image: subEvent.image || null,
                event_gallery: subEvent.eventGallery || [],
                academic_year: subEvent.academicYear || '2026-27'
            };
            const { error } = await supabase.from('fest_sub_events').upsert(payload);
            if (error) {
                toast.error(`Error saving fest sub event: ${error.message}`);
                return;
            }
            toast.success('Fest Sub-Event saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteFestSubEvent = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('fest_sub_events').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting fest sub event: ${error.message}`);
                return;
            }
            toast.success('Fest Sub-Event deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const saveFestGallery = async (festId: 'vectors' | 'kurukshetra' | 'rhythms', gallery: string[]) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('fest_galleries').upsert({ id: festId, gallery });
            if (error) {
                toast.error(`Error saving fest gallery: ${error.message}`);
                return;
            }
            setFestGalleries(prev => ({ ...prev, [festId]: gallery }));
            toast.success(`${festId.toUpperCase()} fest gallery updated!`);
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const saveTopper = async (item: TopperItem) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = toppers.find(t => t.id === item.id);
            const validId = item.id && isValidUUID(item.id) ? item.id : (existing ? existing.id : generateUUID());
            const payload = {
                id: validId,
                sem_type: item.semType,
                year_batch: item.yearBatch,
                rank: item.rank,
                name: item.name,
                sgpa: item.sgpa
            };
            const { error } = await supabase.from('toppers').upsert(payload);
            if (error) {
                toast.error(`Error saving topper: ${error.message}`);
                return;
            }
            toast.success('Academic topper record saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteTopper = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('toppers').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting topper: ${error.message}`);
                return;
            }
            toast.success('Topper record deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const saveDomainAward = async (item: DomainAwardItem) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const existing = domainAwards.find(d => d.id === item.id);
            const validId = item.id && isValidUUID(item.id) ? item.id : (existing ? existing.id : generateUUID());
            const payload = {
                id: validId,
                title: item.title,
                recipient: item.recipient,
                domain: item.domain
            };
            const { error } = await supabase.from('domain_awards').upsert(payload);
            if (error) {
                toast.error(`Error saving domain award: ${error.message}`);
                return;
            }
            toast.success('Domain award saved!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const deleteDomainAward = async (id: string) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const { error } = await supabase.from('domain_awards').delete().eq('id', id);
            if (error) {
                toast.error(`Error deleting domain award: ${error.message}`);
                return;
            }
            toast.success('Domain award deleted!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const updateHomeConfig = async (config: HomeConfig) => {
        try {
            if (!isSupabaseConfigured || !supabase) return;
            const payload = {
                id: 'default',
                hero_headline: config.hero_headline,
                hero_subtitle: config.hero_subtitle,
                announcement_text: config.announcement_text,
                about_text: config.about_text,
                stat_members: config.stat_members,
                stat_events: config.stat_events,
                stat_workshops: config.stat_workshops,
                image_events: config.image_events || null,
                image_team: config.image_team || null,
                image_resources: config.image_resources || null,
                image_staff: config.image_staff || null
            };
            const { error } = await supabase.from('home_config').upsert(payload);
            if (error) {
                toast.error(`Error updating homepage config: ${error.message}`);
                return;
            }
            toast.success('Homepage details updated!');
            await refreshContent();
            broadcastSync();
        } catch (err: any) {
            toast.error(`Error: ${err.message}`);
        }
    };

    const contextValue = useMemo(() => ({
        events,
        team,
        staff,
        resources,
        projects,
        nptel,
        highlights,
        festSubEvents,
        festGalleries,
        toppers,
        domainAwards,
        homeConfig,
        academicYear,
        setAcademicYear,
        loading,
        saveEvent,
        deleteEvent,
        saveTeamMember,
        deleteTeamMember,
        reorderTeamMembers,
        saveStaffMember,
        deleteStaffMember,
        reorderStaffMembers,
        saveResource,
        deleteResource,
        saveProject,
        deleteProject,
        saveNptel,
        deleteNptel,
        saveHighlight,
        deleteHighlight,
        saveFestSubEvent,
        deleteFestSubEvent,
        saveFestGallery,
        saveTopper,
        deleteTopper,
        saveDomainAward,
        deleteDomainAward,
        updateHomeConfig
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [
        events,
        team,
        staff,
        resources,
        projects,
        nptel,
        highlights,
        festSubEvents,
        festGalleries,
        toppers,
        domainAwards,
        homeConfig,
        academicYear,
        loading
    ]);

    return (
        <ContentContext.Provider value={contextValue}>
            {children}
        </ContentContext.Provider>
    );
}

export function useContent() {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
}
