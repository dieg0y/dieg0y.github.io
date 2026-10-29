#!/usr/bin/env python3
"""ATS-friendly IAM CV for Diego Yonoff — generated strictly from audited real data."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# ── Font registration (FreeSerif family, verified on this system) ──
pdfmetrics.registerFont(TTFont('FreeSerif', '/usr/share/fonts/truetype/freefont/FreeSerif.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Bold', '/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Italic', '/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-BoldItalic', '/usr/share/fonts/truetype/freefont/FreeSerifBoldItalic.ttf'))
registerFontFamily('FreeSerif', normal='FreeSerif', bold='FreeSerif-Bold',
                   italic='FreeSerif-Italic', boldItalic='FreeSerif-BoldItalic')

# ── Brand palette (from the audited portfolio identity: terracotta on warm ink) ──
ACCENT = colors.HexColor('#B54E26')      # brand terracotta (print-safe depth)
TEXT_PRIMARY = colors.HexColor('#1A1A1A')
TEXT_MUTED = colors.HexColor('#5C5750')

# ── Styles ──
name_style = ParagraphStyle('ResumeName', fontName='FreeSerif', fontSize=20,
                            leading=23, alignment=TA_CENTER, spaceAfter=1.5,
                            textColor=TEXT_PRIMARY)
tagline_style = ParagraphStyle('ResumeTagline', fontName='FreeSerif-Bold', fontSize=10.5,
                               leading=13, alignment=TA_CENTER, spaceAfter=1.5,
                               textColor=ACCENT)
contact_style = ParagraphStyle('ResumeContact', fontName='FreeSerif', fontSize=9.5,
                               leading=12, alignment=TA_CENTER, textColor=TEXT_MUTED,
                               spaceAfter=2)
section_title_style = ParagraphStyle('ResumeSectionTitle', fontName='FreeSerif-Bold', fontSize=11.5,
                                     leading=13.5, spaceBefore=3.5, spaceAfter=1.5,
                                     textColor=ACCENT)
entry_title_style = ParagraphStyle('ResumeEntryTitle', fontName='FreeSerif', fontSize=10.5,
                                   leading=12.8, spaceAfter=0.5, textColor=TEXT_PRIMARY)
entry_meta_style = ParagraphStyle('ResumeEntryMeta', fontName='FreeSerif', fontSize=9.5,
                                  leading=11.8, textColor=TEXT_MUTED, spaceAfter=1)
bullet_style = ParagraphStyle('ResumeBullet', fontName='FreeSerif', fontSize=10,
                              leading=12, leftIndent=12, bulletIndent=2,
                              spaceBefore=0.2, spaceAfter=0.2, textColor=TEXT_PRIMARY)
body_style = ParagraphStyle('ResumeBody', fontName='FreeSerif', fontSize=10,
                            leading=12.2, spaceAfter=1.5, textColor=TEXT_PRIMARY)


def section_header(title):
    return [
        Paragraph(f'<b>{title}</b>', section_title_style),
        HRFlowable(width='100%', thickness=0.8, color=ACCENT, spaceBefore=0, spaceAfter=3),
    ]


def entry(title, meta, bullets):
    els = [Paragraph(f'<b>{title}</b>', entry_title_style),
           Paragraph(meta, entry_meta_style)]
    for b in bullets:
        els.append(Paragraph(f'• {b}', bullet_style))
    els.append(Spacer(1, 1))
    return els


doc = SimpleDocTemplate(
    '/home/z/my-project/public/cv-diego-yonoff-iam.pdf', pagesize=A4,
    leftMargin=1.3*cm, rightMargin=1.3*cm, topMargin=1.0*cm, bottomMargin=0.9*cm,
    title='Resume - Diego Yonoff - Junior IAM Analyst',
    author='Diego Yonoff', creator='Diego Yonoff',
    subject='Junior IAM Analyst - Identity and Access Management',
)

story = []

# ── Header ──
story.append(Paragraph('<b>DIEGO YONOFF MOLINA</b>', name_style))
story.append(Paragraph('Junior IAM Analyst — Identity &amp; Access Management', tagline_style))
story.append(Paragraph(
    'Barranquilla, Colombia (UTC-5) · Open to remote &nbsp;|&nbsp; '
    'diegojose0405@gmail.com &nbsp;|&nbsp; github.com/dieg0y &nbsp;|&nbsp; '
    'linkedin.com/in/diegoyonoff &nbsp;|&nbsp; dieg0y.github.io',
    contact_style))

# ── Summary ──
story.extend(section_header('PROFESSIONAL SUMMARY'))
story.append(Paragraph(
    'Systems Engineering student specializing in Identity and Access Management, '
    'seeking a first remote junior IAM role. I study the identity lifecycle end to '
    'end — joiner/mover/leaver, RBAC, access reviews — through a self-authored '
    '34-phase, 373-item roadmap with per-item exit criteria, backed by working '
    'code: JWT authentication services, IAM tooling, and an offline IAM study '
    'platform. Skills are evidence-labeled (hands-on / working knowledge / '
    'foundational); every claim traces to a repository or documented lab.',
    body_style))

# ── Skills ──
story.extend(section_header('TECHNICAL SKILLS'))
skills_rows = [
    ('IAM Core',
     'RBAC &amp; least privilege (hands-on) · Identity lifecycle JML · Access '
     'reviews · SoD · IGA concepts · Identity auditing &amp; hygiene (working)'),
    ('Microsoft Identity',
     'Active Directory (hands-on, home lab) · Microsoft Entra ID · Graph API · '
     'PowerShell · MFA (working) · Conditional Access (foundational)'),
    ('Identity Protocols',
     'JWT issue &amp; validation (hands-on) · OAuth 2.0 / OIDC · SSO &amp; '
     'federation (working) · SAML · SCIM (foundational)'),
    ('Identity Security / ITDR',
     'KQL &amp; log analysis, alert triage (hands-on, labs) · ITDR concepts · '
     'MITRE ATT&amp;CK · SIEM concepts: Sentinel, Splunk (working)'),
    ('Scripting &amp; Systems',
     'Python · TypeScript/React · Java/Spring Boot · Git (hands-on) · SQL · '
     'Linux/Windows admin · TCP/IP, DNS (working)'),
]
for cat, vals in skills_rows:
    story.append(Paragraph(f'<b>{cat}:</b>&nbsp; {vals}', bullet_style))

# ── Projects ──
story.extend(section_header('PROJECTS (PERSONAL & ACADEMIC — NO CLIENT WORK)'))
story.extend(entry(
    'VaultNotes — Offline-first cybersecurity knowledge platform (Personal)',
    'TypeScript · Next.js 16 · React 19 · Dexie/IndexedDB · Zod · PWA &nbsp;|&nbsp; '
    'github.com/dieg0y/VAULTNOTES',
    [
        'Built an IAM pillar with 50 simulated identity tickets, 50 knowledge-base '
        'articles, 50 runbooks, and 30 troubleshooting guides around a 373-item, '
        '34-phase IAM analyst roadmap (fundamentals → IGA, PAM, ITDR, cloud IAM, '
        'Zero Trust, GRC).',
        'Coded IAM tools in TypeScript: JWT decoder, SID/RID analyzer, LDAP DN '
        'parser, RBAC analyzer; documented 102 IAM attack techniques with incident '
        'case studies (Okta 2022, MGM 2023, Uber 2022). Offline ZIP backup with '
        'strict validation and DOMPurify sanitization.',
    ]))
story.extend(entry(
    'plazoleta-usuarios — User authentication microservice (Academic)',
    'Java · Spring Boot · Spring Security · JJWT · BCrypt · MySQL &nbsp;|&nbsp; '
    'github.com/dieg0y/plazoleta-usuarios',
    [
        'Implemented JWT (HS256) issuance with user id, role, and email claims; '
        'stateless JwtAuthenticationFilter; BCrypt password hashing.',
        'Enforced role-based endpoint authorization (ADMINISTRADOR / PROPIETARIO / '
        'CLIENTE) in hexagonal architecture; a companion service validates the same '
        'tokens — cross-service trust in practice.',
    ]))
story.extend(entry(
    'IPsubnetting — IPv4 subnet calculator CLI (Personal)',
    'Python &nbsp;|&nbsp; github.com/dieg0y/IPsubnetting',
    [
        'CLI tool for CIDR validation, subnet ranges, host counts, and binary mask '
        'breakdown, with layered architecture.',
    ]))

# ── Labs ──
story.extend(section_header('LABS & STRUCTURED STUDY (PERSONAL)'))
for b in [
    'IAM Analyst Roadmap: self-authored 34-phase / 373-item curriculum with exit '
    'criteria and per-item evidence tracking.',
    'AD Access Audit Lab (home lab): users, groups, and effective access reviewed '
    'against least privilege. Hack The Box SOC labs: brute-force, privilege '
    'escalation, lateral movement; Sysmon/Event Log analysis; MITRE ATT&amp;CK '
    'mapping (complementary ITDR practice).',
]:
    story.append(Paragraph(f'• {b}', bullet_style))

# ── Experience ──
story.extend(section_header('EXPERIENCE'))
story.extend(entry(
    'Academic Tutor — Computer Logic &amp; Programming Fundamentals',
    'Universidad Simón Bolívar · 2024 – Present · Barranquilla, Colombia',
    [
        'Tutor lower-semester Systems Engineering students in algorithm design, '
        'object-oriented logic, and data structures; guide Linux CLI, system '
        'administration, and network fundamentals labs.',
    ]))

# ── Education ──
story.extend(section_header('EDUCATION'))
story.append(Paragraph(
    '<b>BSc Systems Engineering — 6th semester · Universidad Simón Bolívar · '
    'Barranquilla, Colombia</b><br/>Coursework: computer networks, database '
    'architecture, operating systems, algorithm analysis.',
    entry_meta_style))
story.append(Spacer(1, 1.5))

# ── Certifications ──
story.extend(section_header('CERTIFICATIONS & LANGUAGES'))
for b in [
    'Cambridge Linguaskill General — CEFR B2 (verified; average 172, Listening '
    'C1) · Microsoft SC-200 — in progress · Next target: SC-300 (Identity and '
    'Access Administrator) · Languages: Spanish (native), English (B2).',
]:
    story.append(Paragraph(f'• {b}', bullet_style))

doc.build(story)
print('CV generated: /home/z/my-project/public/cv-diego-yonoff-iam.pdf')
