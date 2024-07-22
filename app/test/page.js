import React from 'react';
import Box from '../components/Box';

const ProfileCard = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="grid grid-cols-6 grid-rows-6 gap-4 p-8 rounded-lg">
        <Box colSpan={2}>Experience</Box>
        <Box colSpan={2}>UI/UX Design</Box>
        <Box colSpan={2}>Miami, USA</Box>
        <Box colSpan={1}>UM</Box>
        <Box colSpan={2}>Madrid, Spain</Box>
        <Box colSpan={1}>Hello</Box>
        <Box colSpan={2}>Image</Box>
        <Box colSpan={2}>Projects</Box>
        <Box colSpan={2}>Development</Box>
        <Box colSpan={1}>22</Box>
        <Box colSpan={1}>Resume</Box>
        <Box colSpan={2}>LinkedIn</Box>
      </div>
    </div>
    );
}

export default ProfileCard;
