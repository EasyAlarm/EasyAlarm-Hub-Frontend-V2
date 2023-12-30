import {create} from 'zustand'
import { createUserSlice } from './userSlice'

export const useStore = create(createUserSlice);