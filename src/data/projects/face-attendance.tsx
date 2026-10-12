import type { ProjectData, ProjectMedia } from './types'

const screenshots = [
  'first.jpg',
  'register.jpg',
  'register.png',
  'registernull.jpg',
  'mail.png',
  'input_otp.jpg',
  'otp.jpg',
  'face.jpg',
  'require_keep_face.jpg',
  'profile.jpg',
  'updateprofile.jpg',
  'joinclass.jpg',
  'joinclassfrom.jpg',
  'stjoinclass.jpg',
  'stnotjoinclass.jpg',
  'stsideview.jpg',
  'teacherclass.jpg',
  'createrclass.jpg',
  'classworknullfeed.jpg',
  'feedclasswork.jpg',
  'steamnullfeed.jpg',
  'steam.jpg',
  'feedclasswork.jpg',
  'create_chekin.jpg',
  'createannoucement.jpg',
  'creatework.jpg',
  'datecreatework.jpg',
  'timecreatework.jpg',
  'reportst.jpg',
  'reportteacher.jpg',
  'people.jpg',
].map((fileName): ProjectMedia => ({
  type: 'image',
  src: `/face_project/${fileName}`,
  alt: `Face attendance application screen: ${fileName}`,
}))

const faceAttendance: ProjectData = {
  id: 1,
  category: 'mobile',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.6">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18-5h-3M3 16v3a2 2 0 0 0 2 2h3m11-5v3a2 2 0 0 1-2 2h-3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg,rgba(var(--primary-rgb),.25),rgba(168,218,220,.3))',
  titleKey: 'projects.items.faceAttendance.title',
  descriptionKey: 'projects.items.faceAttendance.description',
  roleKey: 'projects.items.faceAttendance.role',
  highlightsKeys: [
    'projects.items.faceAttendance.highlights.faceVerification',
    'projects.items.faceAttendance.highlights.geofencing',
    'projects.items.faceAttendance.highlights.liveAttendance',
    'projects.items.faceAttendance.highlights.classroomTools',
    'projects.items.faceAttendance.highlights.security',
  ],
  stack: [
    'Flutter',
    'FastAPI',
    'Python',
    'Google ML Kit',
    'OpenCV',
    'dlib',
    'PostgreSQL',
    'WebSockets',
    'Firebase',
  ],
  coverImage: '/face_project/face-scan.png',
  media: screenshots,
}

export default faceAttendance